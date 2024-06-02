import { Controller, Post } from '@nestjs/common';

import { CurrentEventBridgeBody } from './event-bridge.decorator';
import { EventBridgeService } from './event-bridge.service';

@Controller('event-bridge')
export class EventBridgeController {

	constructor(
		private readonly eventBridgeService: EventBridgeService
	) { }


	@Post()
	handleEvent(
		@CurrentEventBridgeBody() event: any
	) {
		return this.eventBridgeService.handleEvent(event);
	}

}
