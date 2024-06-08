import { Injectable } from '@nestjs/common';

import { LookUpGoogleService } from './look-up-google.service';

@Injectable()
export class LookUpService {

	//  sport = 20;

	constructor(
		private lookUpGoogleService: LookUpGoogleService
	) { }


	async lookUp() {
		return `This action returns all lookUp`;
	}
	// 'https://trends.google.com/trends/api/explore/pickers/category?hl=en-US&tz=240'

	async lookupGoogle() {
		return await this.lookUpGoogleService.getTrends();

		// const trends = await googleTrends.dailyTrends({ geo: 'NG' });
		// return JSON.parse(trends);
	}


}
