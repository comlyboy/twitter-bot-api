import { DeleteMessageCommand, GetQueueUrlCommand, SQSClient } from '@aws-sdk/client-sqs';
import { Injectable } from '@nestjs/common';

import { EnvironmentConfig } from 'src/common';
import { ISqsEvent } from './sqs.interface';

@Injectable()
export class SqsService {
	// https://github.com/bordeux/sqsmv/tree/master
	//https://github.com/meadow/sqs/blob/master/index.js
	// https://hevodata.com/learn/sqs-receivemessage/
	// https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_GetQueueUrl.html
	// https://github.com/Nadyan/aws-sqs/blob/master/src/operations/send.js
	// https://github.com/aayush-dhakal/AWS-EventBridge-SQS/blob/master/functions/processEvent.js
	// https://www.youtube.com/watch?v=65NFikq8dU4


	async handleSqsEvent(sqsEvents: ISqsEvent[]) {
		sqsEvents.forEach(async event => {
			console.count('LOOP SQS')
			await this.acknowledgeEvent(event);
		});
		return '';
	}


	async acknowledgeEvent(event: ISqsEvent) {
		// const arn = 'arn:aws:sqs:us-east-1:927440925921:test-lambda-messaging.fifo'
		const sqsAccountId = event.eventSourceARN.split(':').at(4);
		const sqsQueueName = event.eventSourceARN.split(':').at(5);
		console.log('sqsAccountId', sqsAccountId);
		console.log('sqsQueueName', sqsQueueName);

		const queueInformation = await this.sqsInstance().send(new GetQueueUrlCommand({
			QueueName: sqsQueueName,
			QueueOwnerAWSAccountId: sqsAccountId
		}));
		console.log('queueInformation', queueInformation);
		const result = await this.sqsInstance().send(new DeleteMessageCommand({
			QueueUrl: queueInformation.QueueUrl,
			ReceiptHandle: event.receiptHandle
		}));
		console.log(result);
	}


	sendDLQ() {

	}


	sqsInstance(): SQSClient {
		return new SQSClient({
			credentials: {
				accessKeyId: EnvironmentConfig.AWS_ACCESS_KEY_ID,
				secretAccessKey: EnvironmentConfig.AWS_SECRET_ACCESS_KEY
			}
		});
	}

}
