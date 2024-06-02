import { Injectable } from '@nestjs/common';

@Injectable()
export class SnsService {
	// https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#example-standard-queue-message-event

	handleSnsEvent(events: any[]) {
		console.log('SNS event', events);
		return '';
	}

}
