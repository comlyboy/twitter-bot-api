import { TransactWriteItemsCommandInput, TransactWriteItemsCommandOutput } from "@aws-sdk/client-dynamodb";
import { BatchGetCommandOutput, BatchWriteCommandInput, BatchWriteCommandOutput, DeleteCommandInput, DeleteCommandOutput, GetCommandInput, GetCommandOutput, PutCommandInput, PutCommandOutput, QueryCommandInput, QueryCommandOutput, UpdateCommandInput, UpdateCommandOutput } from "@aws-sdk/lib-dynamodb";
import { EntityNameType } from "../base.constant";
import { ObjectType } from "../base.interface";



interface IQueryKey {
	id: string;
	creatorUserId?: string,
	entityName?: EntityNameType
}

export interface IPutCommandInput<TResponse extends ObjectType> extends Omit<PutCommandInput, 'TableName'> {
	TableName?: string;
	Item: TResponse;
}
export interface IPutCommandOutput<TResponse extends ObjectType> extends PutCommandOutput {
	Result: TResponse;
}

export interface IGetCommandInput<TResponse extends ObjectType> extends Omit<GetCommandInput, 'TableName'> {
	TableName?: string;
	Key: IQueryKey;
	// AttributesToGet?: (keyof TResponse)[];
}
export interface IGetCommandOutput<TResponse extends ObjectType> extends GetCommandOutput {
	Item: TResponse;
	Result?: TResponse;
}

export interface IBatchGetCommandInput<TResponse extends ObjectType> {
	TableName?: string;
	Keys: Required<Pick<IQueryKey, 'id' | 'entityName'>>[]
	AttributesToGet?: (keyof TResponse)[];
	ConsistentRead?: boolean;
	ExpressionAttributeNames?: ObjectType;
	ProjectionExpression?: string;
}

export interface IBatchGetCommandOutput<TResponse extends ObjectType> {
	$metadata: BatchGetCommandOutput["$metadata"];
	UnprocessedKeys?: BatchGetCommandOutput['UnprocessedKeys'];
	Results: TResponse[];
	ConsumedCapacity?: BatchGetCommandOutput['ConsumedCapacity'];
}

export interface IQueryCommandInput<TResponse extends ObjectType> extends Omit<QueryCommandInput, 'TableName'> {
	TableName?: string;
	ExclusiveStartKey?: Partial<TResponse>;
}
export interface IQueryCommandOutput<TResponse extends ObjectType> extends QueryCommandOutput {
	Items: TResponse[];
	Results?: TResponse[];
	LastEvaluatedKey: Partial<TResponse>;
}

export interface IBatchWriteCommandInput extends BatchWriteCommandInput { }
export interface IBatchWriteCommandOutput extends BatchWriteCommandOutput { }

export interface ITransactWriteItemsCommandInput extends TransactWriteItemsCommandInput { }
export interface ITransactWriteItemsCommandOutput extends TransactWriteItemsCommandOutput { }

export interface IUpdateCommandInput<TResponse extends ObjectType> extends Omit<UpdateCommandInput, 'TableName'> {
	TableName?: string;
	Key: IQueryKey;
}
export interface IUpdateCommandOutput<TResponse extends ObjectType> extends UpdateCommandOutput {
	Attributes: TResponse
	Result: TResponse
}

export interface IDeleteCommandInput extends Omit<DeleteCommandInput, 'TableName'> {
	TableName?: string;
	Key: Required<Pick<IQueryKey, 'id' | 'entityName'>>;
}
export interface IDeleteCommandOutput extends DeleteCommandOutput { }
