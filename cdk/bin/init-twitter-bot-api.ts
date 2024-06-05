import * as cdk from 'aws-cdk-lib';
import { TwitterBotApiLambdaStack } from '../lib/lambda.stack';

const app = new cdk.App();
new TwitterBotApiLambdaStack(app, 'TwitterBotApiHandler', {
	stage: 'staging'
});