import { Injectable, NotFoundException } from '@nestjs/common';

// import { LookUpGoogleService } from './look-up-google.service';
import { IEventData } from './look-up.interface';
import { AwsDynamoRepositoryService, EntityNameEnum, TwitterService } from 'src/common';
import { IBot } from '../bot';

@Injectable()
export class LookUpService {

	constructor(
		// private lookUpGoogleService: LookUpGoogleService,
		private twitterService: TwitterService,
		private readonly awsDynamoService: AwsDynamoRepositoryService
	) { }


	async lookUp(eventData: IEventData) {
		const currentBot = await this.awsDynamoService.runGetByIdCommand<IBot>({ id: eventData.botId, entityName: EntityNameEnum.BOT });
		if (!currentBot) {
			throw new NotFoundException('Bot with does not exist!');
		}




		return 'Looked up';
	}

	async lookupGoogle() {
		// 'https://trends.google.com/trends/api/explore/pickers/category?hl=en-US&tz=240'
		// return await this.lookUpGoogleService.interestOverTime({ keyword: 'Cuba' });

	const result = await	this.twitterService.postTweet('test test');
		console.log('result', result);

		return ' '
		// const trends = await googleTrends.dailyTrends({ geo: 'NG' });
		// return JSON.parse(trends);
	}


}
