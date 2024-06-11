import { Controller, Get, Post, Res } from '@nestjs/common';

import { Response } from 'express';

import { ApiResponseBuilder, ApiResult } from 'src/common';
import { LookUpService } from './look-up.service';
import { CurrentEventBridgeBody } from 'src/decorator';
import { IEventData } from './look-up.interface';

@Controller('look-up')
export class LookUpController {

	constructor(
		private readonly lookUpService: LookUpService
	) { }


	@Post()
	async lookUp(
		@Res() res: Response,
		@CurrentEventBridgeBody() eventData: IEventData
	) {
		await this.lookUpService.lookUp(eventData);
		return new ApiResponseBuilder(res, new ApiResult());
	}


	@Get()
	async lookupGoogle(
		@Res() res: Response
	) {
		const data = await this.lookUpService.lookupGoogle();
		return res.status(200).json({ data });
	}

}
