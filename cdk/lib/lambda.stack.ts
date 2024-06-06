// import path from 'path';

import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
// import * as s3Deploy from 'aws-cdk-lib/aws-s3-deployment';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as events from 'aws-cdk-lib/aws-events';
import * as cloudWatch from 'aws-cdk-lib/aws-logs';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as targets from 'aws-cdk-lib/aws-events-targets';
// import * as cloudformation from 'aws-cdk-lib/aws-cloudformation';
import * as apiGatewayV2 from 'aws-cdk-lib/aws-apigatewayv2';
import * as apiGatewayIntegration from 'aws-cdk-lib/aws-apigatewayv2-integrations';


interface IProp extends cdk.StackProps {
	readonly stage: 'staging' | 'production';
	readonly stackId: string;
}

export class TwitterBotApiLambdaStack extends cdk.Stack {
	constructor(scope: cdk.App, id: string, props: IProp) {
		super(scope, id, props);

		// const lambdaLayer = new lambda.LayerVersion(this, props.stackId + 'Layer', {
		// 	code: lambda.Code.fromAsset('node_modules'),
		// 	layerVersionName: 'lambdaNestFullResource',
		// 	removalPolicy: cdk.RemovalPolicy.RETAIN,
		// 	compatibleArchitectures: [lambda.Architecture.ARM_64],
		// 	compatibleRuntimes: [lambda.Runtime.NODEJS_18_X, lambda.Runtime.NODEJS_20_X]
		// });

		new s3.Bucket(this, props.stackId + 'Bucket', {
			bucketName: props.stackName,
			removalPolicy: cdk.RemovalPolicy.DESTROY
		});

		const twitterBotFunction = new lambda.Function(this, id, {
			functionName: props.stackName,
			description: 'This is twitter bot api, it listens to scheduled event.',
			handler: 'serverless.handler',
			runtime: lambda.Runtime.NODEJS_20_X,
			timeout: cdk.Duration.seconds(15),
			// memorySize: 1024,
			architecture: lambda.Architecture.ARM_64,
			code: lambda.Code.fromAsset('dist/src'),
			ephemeralStorageSize: cdk.Size.mebibytes(128),
			// layers: [lambdaLayer],
			environment: {
				NODE_ENV: props.stage,
				NODE_OPTIONS: '--enable-source-maps',
				AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1'
			},
		});

		const lambdaApi = new apiGatewayV2.HttpApi(this, props.stackId + 'HttpAPi', {
			apiName: props.stackName,
			corsPreflight: {
				allowHeaders: ['*'],
				allowOrigins: ['*'],
				allowMethods: [apiGatewayV2.CorsHttpMethod.ANY],
			}
		})
		lambdaApi.addRoutes({
			path: '/{proxy+}',
			methods: [apiGatewayV2.HttpMethod.ANY],
			integration: new apiGatewayIntegration.HttpLambdaIntegration(props.stackId + 'HttpApiIntegration', twitterBotFunction)
		});

		// s3
		// const s3bucket = new s3.Bucket(this, props.stackId + 'Bucket', {
		// 	bucketName: props.stackName,
		// 	removalPolicy: cdk.RemovalPolicy.DESTROY
		// });
		// new s3Deploy.BucketDeployment(this, 'DeployWebsite', {
		// 	sources: [s3Deploy.Source.asset('')],
		// 	destinationBucket: s3bucket,
		// 	destinationKeyPrefix: 'twitter-bot-api'
		// });

		// cloudwatch
		new cloudWatch.LogGroup(this, props.stackId + 'LogGroup', {
			// logGroupName: props.stackName,
			removalPolicy: cdk.RemovalPolicy.DESTROY,
			retention: cloudWatch.RetentionDays.THREE_MONTHS
		}).grantWrite(twitterBotFunction);

		// schedule
		const eventSchedule = new events.Rule(this, props.stackId + 'Schedule', {
			ruleName: props.stackName + '-schedule',
			schedule: events.Schedule.rate(cdk.Duration.minutes(1)),
			targets: [
				new targets.LambdaFunction(twitterBotFunction, {
					event: events.RuleTargetInput.fromObject({ botId: '123' }),
				}),
			],
		});
		eventSchedule.applyRemovalPolicy(cdk.RemovalPolicy.DESTROY);

		// dynamoDB
		const dynamoTable = new dynamodb.Table(this, props.stackId + 'Database', {
			tableName: `twitter-bot-database-table.${props.stage}`,
			billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
			partitionKey: { name: "id", type: dynamodb.AttributeType.STRING },
			sortKey: { name: "entityName", type: dynamodb.AttributeType.STRING },
		});
		dynamoTable.addGlobalSecondaryIndex({
			indexName: 'entityName_createdAtDate_index',
			partitionKey: { name: 'entityName', type: dynamodb.AttributeType.STRING },
			sortKey: { name: 'createdAtDate', type: dynamodb.AttributeType.STRING },
		});
		dynamoTable.addGlobalSecondaryIndex({
			indexName: 'entityNameBot_createdAtDate_index',
			partitionKey: { name: 'botId', type: dynamodb.AttributeType.STRING },
			sortKey: { name: 'createdAtDate', type: dynamodb.AttributeType.STRING },
		});
		dynamoTable.grantFullAccess(twitterBotFunction);

	}
}
