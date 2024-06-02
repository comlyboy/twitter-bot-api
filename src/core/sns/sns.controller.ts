import { Controller, Post } from '@nestjs/common';
import { CurrentSnsEventBody } from './sns.decorator';

import { SnsService } from './sns.service';

@Controller('sns')
export class SnsController {
	constructor(private readonly snsService: SnsService) { }

	@Post()
	handleSnsEvent(
		@CurrentSnsEventBody() snsEvents: any[]
	) {
		return this.snsService.handleSnsEvent(snsEvents);
	}

}
