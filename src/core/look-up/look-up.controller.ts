import { Controller, Post } from '@nestjs/common';

import { LookUpService } from './look-up.service';
import { CurrentEventBridgeBody } from 'src/decorator';

@Controller('look-up')
export class LookUpController {

	constructor(
		private readonly lookUpService: LookUpService
	) { }


	@Post()
	handleEvent(
		@CurrentEventBridgeBody() event: any
	) {
    return this.lookUpService.findAll();
  }

}
