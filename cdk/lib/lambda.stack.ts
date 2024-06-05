import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as events from 'aws-cdk-lib/aws-events';
import * as targets from 'aws-cdk-lib/aws-events-targets';
import * as apiGatewayV2 from 'aws-cdk-lib/aws-apigatewayv2';
import * as apiGatewayIntegration from 'aws-cdk-lib/aws-apigatewayv2-integrations';


interface IProp extends cdk.StackProps {
	readonly stage: 'staging' | 'production';
}

export class TwitterBotApiLambdaStack extends cdk.Stack {
	constructor(scope: cdk.App, id: string, props?: IProp) {
		super(scope, id, props);
		const LAMBDA_API_ID = 'TwitterBotApi';
		const LAMBDA_API_NAME = 'twitter-bot-api';

		const twitterBotFunction = new lambda.Function(this, LAMBDA_API_ID + '_' + props.stage, {
			functionName: LAMBDA_API_NAME + '-' + props.stage,
			description: 'This is twitter bot api, it listens to scheduled event.',
			handler: 'serverless.handler',
			runtime: lambda.Runtime.NODEJS_20_X,
			timeout: cdk.Duration.seconds(15),
			architecture: lambda.Architecture.ARM_64,
			code: lambda.Code.fromAsset('src/serverless.ts'),
			environment: {
				NODE_ENV: props.stage,
				NODE_OPTIONS: '--enable-source-maps',
				AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1'
			}
		});

		const apiIntegration = new apiGatewayIntegration.HttpLambdaIntegration(LAMBDA_API_ID + '-integration', twitterBotFunction);
		new apiGatewayV2.HttpApi(this, LAMBDA_API_ID + '-Http', {
			apiName: LAMBDA_API_NAME + '-' + props.stage,
			corsPreflight: {
				allowHeaders: ['*'],
				allowOrigins: ['*'],
				allowMethods: [apiGatewayV2.CorsHttpMethod.ANY],
			}
		}).addRoutes({
			path: '/{proxy+}',
			integration: apiIntegration,
			methods: [apiGatewayV2.HttpMethod.ANY],
		});

		// schedule
		new events.Rule(this, 'Schedule Rule', {
			ruleName: LAMBDA_API_NAME + '-schedule',
			schedule: events.Schedule.expression('*/10 * * * * *'),
		}).addTarget(new targets.LambdaFunction(twitterBotFunction));



	}
}
