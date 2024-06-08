import { Controller, Get, Post, Res } from '@nestjs/common';

import { Response } from 'express';

import { LookUpService } from './look-up.service';
import { CurrentEventBridgeBody } from 'src/decorator';

@Controller('look-up')
export class LookUpController {

	constructor(
		private readonly lookUpService: LookUpService
	) { }


	@Post()
	async lookUp(
		@Res() res: Response,
		@CurrentEventBridgeBody() event: any
	) {
		console.log('LOG => event recieved', event);
		return this.lookUpService.lookUp();
	}

	@Get()
	async lookupGoogle(
		@Res() res: Response
	) {
		const data = await this.lookUpService.lookupGoogle();
		return res.status(200).json({ data });
	}

}
