import * as cdk from 'aws-cdk-lib';
import { TwitterApiLambdaStack } from '../lib/lambda.stack';
import { LambdaApplicationEnum } from '../constant';

const app = new cdk.App();

const stackName = LambdaApplicationEnum.STACK_NAME + '-staging';
const stackId = LambdaApplicationEnum.STACK_ID + 'Staging';

new TwitterApiLambdaStack(app, stackId, {
	stage: 'staging',
	stackName,
	stackId,
	env: { region: "us-east-1" },
	tags: {
		appName: 'twitter-api'
	}
});