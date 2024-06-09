import { Injectable } from '@nestjs/common';

import { LookUpGoogleService } from './look-up-google.service';
import { IEventData } from './look-up.interface';
import { ICurrentInvocation } from 'src/common';

@Injectable()
export class LookUpService {

	constructor(
		private lookUpGoogleService: LookUpGoogleService
	) { }


	async lookUp(eventData: IEventData, currentInvocation: ICurrentInvocation) {
		console.log('currentInvocation =>>', currentInvocation);
		console.log('eventData ==>', eventData);

		return `This action returns all lookUp`;
	}

	async lookupGoogle() {
		// 'https://trends.google.com/trends/api/explore/pickers/category?hl=en-US&tz=240'
		return await this.lookUpGoogleService.interestOverTime({ keyword: 'Cuba' });

		// const trends = await googleTrends.dailyTrends({ geo: 'NG' });
		// return JSON.parse(trends);
	}


}
