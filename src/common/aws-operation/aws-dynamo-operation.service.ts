import { Inject, Injectable } from '@nestjs/common';

import { DescribeTableCommand, DescribeTableCommandInput, DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { BatchGetCommand, BatchGetCommandInput, BatchGetCommandOutput, BatchWriteCommand, DeleteCommand, DynamoDBDocumentClient, GetCommand, PutCommand, QueryCommand, QueryCommandOutput, UpdateCommand } from "@aws-sdk/lib-dynamodb";
import { marshallOptions, unmarshallOptions } from "@aws-sdk/util-dynamodb";

import { IPutCommandInput, IGetCommandInput, IGetCommandOutput, IBatchGetCommandInput, IBatchGetCommandOutput, IQueryCommandInput, IQueryCommandOutput, IUpdateCommandInput, IUpdateCommandOutput, IBatchWriteCommandInput, IBatchWriteCommandOutput, IDeleteCommandInput } from './aws-dynamo-operation.interface';
import { UtilityService } from '../utility';
import { ObjectType } from '../base.interface';
import { EnvironmentConfig } from 'src/configuration';
import { ApplicationEnvironmentEnum, EntityNameType } from '../base.constant';
import { CachingService } from '../caching';

@Injectable()
export class AwsDynamoRepositoryService {
	private dynamoDbFullClient: DynamoDBDocumentClient;

	@Inject(UtilityService) private readonly utilityService: UtilityService;
	@Inject(CachingService) private readonly cacheService: CachingService;

	// - https://www.alexdebrie.com/posts/dynamodb-limits/

	/** dynamo-db put command */
	async runPutCommand<TResponse>(putParam: IPutCommandInput<TResponse>): Promise<TResponse> {
		await this.DynamoDbInstance().send(new PutCommand({
			...putParam,
			TableName: putParam.TableName || this.generateDatabaseName(),
			ReturnConsumedCapacity: 'TOTAL'
		}));
		return putParam.Item;
	}

	/** Dynamo-DB get by ID command and cache it */
	async runGetByIdCommand<TResponse extends ObjectType>({ id, entityName }: {
		id: string,
		entityName: EntityNameType
	}): Promise<TResponse> {
		let data: TResponse;
		const cachedData = await this.cacheService.get<TResponse>(id);
		data = cachedData ? { ...cachedData } : null;
		if (!cachedData) {
			const { Result } = await this.runGetCommand<TResponse>({ Key: { id, entityName } });
			await this.cacheService.set<TResponse>(id, Result);
			data = Result;
		}
		return data;
	}

	/**dynamo-db get command*/
	async runGetCommand<TResponse extends ObjectType>(getParam: IGetCommandInput<TResponse>) {
		const responseData = await this.DynamoDbInstance().send(new GetCommand({
			...getParam,
			TableName: getParam.TableName || this.generateDatabaseName(),
			ReturnConsumedCapacity: 'TOTAL'
		})) as IGetCommandOutput<TResponse>;
		responseData.Result = responseData.Item;
		return responseData;
	}


	/**dynamo-db batch get command*/
	async runBatchGetCommand<TResponse>({ batchGetParam, returnAllAtOnce = false }: {
		batchGetParam: IBatchGetCommandInput<TResponse>;
		returnAllAtOnce?: boolean;
	}) {
		// https://dynobase.dev/dynamodb-batch-write-update-delete/
		let queryResponse: BatchGetCommandOutput;
		let responseData: TResponse[] = [];
		// batchGetParam.ConsistentRead = true;
		if (!batchGetParam.Keys.length) {
			return {
				$metadata: {},
				ConsumedCapacity: [],
				UnprocessedKeys: {},
				Results: []
			};
		}
		const newBatchParam = await this.utilityService.SanitizeObject({
			data: { ...batchGetParam },
			keysToRemove: ['TableName']
		}) as Omit<IBatchGetCommandInput<TResponse>, 'TableName'>;

		batchGetParam.TableName = batchGetParam.TableName || this.generateDatabaseName();

		const paramFieldsToString = newBatchParam.Keys.map(key => JSON.stringify(key));
		const sanitizedParamStrings = [...new Set(paramFieldsToString)];
		const sanitizedDuplicateBatchParam = sanitizedParamStrings.map<typeof newBatchParam.Keys>(item => JSON.parse(item)).flat()//.map(data=>);

		newBatchParam.Keys = [...sanitizedDuplicateBatchParam];

		do {
			const batchQueryInput: BatchGetCommandInput = {
				RequestItems: {
					[batchGetParam.TableName]: { ...newBatchParam }
				} as any
			}
			queryResponse = await this.DynamoDbInstance().send(new BatchGetCommand({
				...batchQueryInput,
				ReturnConsumedCapacity: 'TOTAL'
			}));
			responseData = [...responseData, ...queryResponse.Responses[batchGetParam.TableName] as TResponse[]]
			batchQueryInput.RequestItems = queryResponse.UnprocessedKeys;
		} while (queryResponse.UnprocessedKeys && Object.keys(queryResponse.UnprocessedKeys).length);
		return {
			...queryResponse,
			Results: responseData,
		} as IBatchGetCommandOutput<TResponse>;
	}


	// https://medium.com/cloud-native-the-gathering/querying-dynamodb-by-date-range-899b751a6ef2
	// https://stackoverflow.com/questions/61796423/dynamodb-query-contains-on-a-list-parameter
	// https://dynobase.dev/dynamodb-pagination
	/**dynamo-db query commands
	 *
	 * @param `returnAllAtOnce`:  if set to true, it returns all without limit .Else, it returns return the current data limit and pagination information.
	 * @default `returnAllAtOnce`: false
	*/
	async runQueryCommand<TResponse>({ queryParam, returnAllAtOnce = false }: {
		queryParam: IQueryCommandInput<TResponse>;
		returnAllAtOnce?: boolean;
	}): Promise<IQueryCommandOutput<TResponse>> {
		let queryResponse: QueryCommandOutput;
		let responseData: TResponse[] = [];
		do {
			queryResponse = await this.DynamoDbInstance().send(new QueryCommand({
				...queryParam,
				TableName: queryParam.TableName || this.generateDatabaseName(),
				ReturnConsumedCapacity: 'TOTAL'
			}));
			responseData = [...responseData, ...queryResponse.Items as TResponse[]];
			queryParam.ExclusiveStartKey = queryResponse.LastEvaluatedKey as TResponse;
		} while ((queryResponse.LastEvaluatedKey && Object.keys(queryResponse.LastEvaluatedKey).length) && returnAllAtOnce);
		queryResponse.Items = responseData;
		queryResponse['Results'] = responseData;
		return queryResponse as IQueryCommandOutput<TResponse>;
	}


	/**dynamo-db update command*/
	// https://stackoverflow.com/questions/55790894/dynamodb-timestamp-reserved-name-expression-attribute-name
	// https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.UpdateExpressions.html#Expressions.UpdateExpressions.Multiple
	async runUpdateCommand<TResponse>(updateParam: IUpdateCommandInput<TResponse>): Promise<IUpdateCommandOutput<TResponse>> {
		const response = await this.DynamoDbInstance().send(new UpdateCommand({
			...updateParam,
			TableName: updateParam.TableName || this.generateDatabaseName(),
			ReturnConsumedCapacity: 'TOTAL',
			ReturnValues: 'ALL_NEW'
		}))
		response['Result'] = response.Attributes;
		return response as IUpdateCommandOutput<TResponse>;
	}


	/**dynamo-db batch update command*/
	async runBatchUpdateCommand(batchUpdateParam: IBatchWriteCommandInput): Promise<IBatchWriteCommandOutput> {
		return this.DynamoDbInstance().send(new BatchWriteCommand({
			...batchUpdateParam,
			ReturnConsumedCapacity: 'TOTAL'
		})) as unknown as IBatchWriteCommandOutput;
	}


	/**dynamo-db delete command*/
	async runDeleteCommand<TResponse>({ deleteParam, user, isSoftDelete = true }: {
		deleteParam: IDeleteCommandInput;
		user: any;
		isSoftDelete?: boolean;
	}) {
		if (isSoftDelete) {
			await this.runUpdateCommand<TResponse>({
				Key: { id: deleteParam.Key.id, entityName: deleteParam.Key.entityName },
				UpdateExpression: 'SET isDeleted = :isDeleted, deleteAtDate = :deleteAtDate, deleteUserId = :deleteUserId',
				ExpressionAttributeValues: {
					':isDeleted': true,
					':deleteAtDate': this.utilityService.GenerateISODate(),
					':deleteUserId': user.id
				}
			});
		} else {
			await this.DynamoDbInstance().send(new DeleteCommand({
				...deleteParam,
				TableName: deleteParam.TableName || this.generateDatabaseName(),
				ReturnConsumedCapacity: 'TOTAL'
			}));
		}
		await this.cacheService.delete(deleteParam.Key.id);
		return { deleted: true };
	}


	/**dynamo-db batch delete command*/
	async runBatchDeleteCommand(updateParam: IBatchWriteCommandInput) {
		// TODO

	}


	/**get dynamo-db table information*/
	async getTableDetials(tableDetailsParam: DescribeTableCommandInput) {
		return this.DynamoDbInstance().send(new DescribeTableCommand({
			...tableDetailsParam
		}));
	}


	private generateDatabaseName() {
		const databaseName = 'twitter-bot-database';
		if (EnvironmentConfig.NODE_ENV === ApplicationEnvironmentEnum.PRODUCTION) {
			return `${databaseName}.${ApplicationEnvironmentEnum.PRODUCTION}`;
		}
		return `${databaseName}.${ApplicationEnvironmentEnum.DEVELOPMENT}`;
	}


	private DynamoDbInstance(): DynamoDBDocumentClient {
		const marshallOptions: marshallOptions = {
			// Whether to automatically convert empty strings, blobs, and sets to `null`.
			convertEmptyValues: true, // false, by default.

			// Whether to remove undefined values while marshalling.
			removeUndefinedValues: false, // false, by default.

			// Whether to convert typeof object to map attribute.
			convertClassInstanceToMap: false, // false, by default.
		};

		const unmarshallOptions: unmarshallOptions = {
			// Whether to return numbers as a string instead of converting them to native JavaScript numbers.
			wrapNumbers: false, // false, by default.
		};

		if (!this.dynamoDbFullClient) {
			const dynamoClient = new DynamoDBClient({ region: 'us-east-1' });
			this.dynamoDbFullClient = DynamoDBDocumentClient.from(dynamoClient, { marshallOptions, unmarshallOptions });
		}
		return this.dynamoDbFullClient;
	}

}
