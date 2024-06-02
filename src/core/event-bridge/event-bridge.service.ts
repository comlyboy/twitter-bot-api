import { EventBridgeClient } from '@aws-sdk/client-eventbridge';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EventBridgeService {

	handleEvent(event: any) {
		console.log('eventBrige Data', event);
		// this.eventBridgeInstance().send()
	}


	eventBridgeInstance(): EventBridgeClient {
		return new EventBridgeClient({});
	}
}
