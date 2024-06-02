import { SQSRecord } from "aws-lambda/trigger/sqs";

export interface ISqsEvent extends SQSRecord {
	// messageId: string;
	// receiptHandle: string;
	// body: TBody;
	// attributes: {
	// 	ApproximateReceiveCount: number;
	// 	SentTimestamp: number;
	// 	SequenceNumber: number;
	// 	MessageGroupId: string;
	// 	SenderId: string;
	// 	MessageDeduplicationId: string;
	// 	ApproximateFirstReceiveTimestamp: number;
	// };
	// messageAttributes: Record<string, any>;
	// md5OfBody: string;
	// eventSource: string;
	// eventSourceARN: string;
	// awsRegion: string;
}