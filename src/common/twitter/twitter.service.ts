import { Injectable } from '@nestjs/common';

import { TwitterApiReadWrite, TwitterApi, SendTweetV2Params, TwitterApiTokens } from 'twitter-api-v2';
import { AwsDynamoRepositoryService } from '../aws-operation';
import { EntityNameEnum } from '../base.constant';
import { UtilityService } from '../utility';

@Injectable()
export class TwitterService {
	private twitterInstance: TwitterApiReadWrite;

	constructor(
		private readonly utilityService: UtilityService,
		private readonly awsDynamoService: AwsDynamoRepositoryService
	) { }


	async postTweet(text: string, options?: any) {
		try {
			return this.twitterInstance.v2.tweet(text, options);
		} catch (error) {
			console.log('error',error);
		}
	}

	async uploadMedia() {

	}

	async quoteTweet(text: string, tweetIdToQuote: string, option: Omit<SendTweetV2Params, 'text'>) {
		return await this.twitterInstance.v2.tweet({
			...option,
			text,
			reply: { ...option.reply, in_reply_to_tweet_id: tweetIdToQuote }
		});
	}

	private async getTwitterInstance() {
		if (!this.twitterInstance) {
			const bot = await this.awsDynamoService.runGetByIdCommand<IBot>({ id: '', entityName: EntityNameEnum.BOT });
			const botCredential = this.utilityService.DecryptData<TwitterApiTokens>(bot.credential);
			this.twitterInstance = new TwitterApi({
				appKey: 'o3dGCi8Ep8yWvKsRZUno0DY7F',
				appSecret: 'MIXOmSDCIw8avI75XInwszE6zf1g06OzZNWkzAqEflMzF2xtQA',
				accessToken: '1226887669222866944-z8k2Nn2dsjQrHTNKb1USw1AocI9iKc',
				accessSecret: 'aGrbYiGhvtNRXIh1aCCykCaHMUHv528kWgh9O9d05eGEN'
			}).readWrite;
			console.log('twitterInstance', JSON.stringify(this.twitterInstance));
		}
		return this.twitterInstance;
	}
}
