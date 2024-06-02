import { Controller, Post } from '@nestjs/common';

import { CurrentSqsEventBody } from './sqs.decorator';
import { ISqsEvent } from './sqs.interface';
import { SqsService } from './sqs.service';

@Controller('sqs')
export class SqsController {

	constructor(private readonly sqsService: SqsService) { }

	@Post()
	handleSqsEvent(
		@CurrentSqsEventBody() sqsEvents: ISqsEvent[]
	) {
		return this.sqsService.handleSqsEvent(sqsEvents);
	}

}
