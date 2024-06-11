import { Injectable, OnModuleInit } from '@nestjs/common';

import { TwitterApiReadWrite, TwitterApi, SendTweetV2Params } from 'twitter-api-v2';

@Injectable()
export class TwitterService implements OnModuleInit {
	private twitterInstance: TwitterApiReadWrite;


	async postTweet(text: string, options?: any) {
		try {
			return this.twitterInstance.v2.tweet(text, options);
		} catch (error) {
			console.log('error', error);
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


	private initTwitter() {
		if (!this.twitterInstance) {
			this.twitterInstance = new TwitterApi({
				appKey: 'o3dGCi8Ep8yWvKsRZUno0DY7F',
				appSecret: 'MIXOmSDCIw8avI75XInwszE6zf1g06OzZNWkzAqEflMzF2xtQA',
				accessToken: '1226887669222866944-z8k2Nn2dsjQrHTNKb1USw1AocI9iKc',
				accessSecret: 'aGrbYiGhvtNRXIh1aCCykCaHMUHv528kWgh9O9d05eGEN'
			}).readWrite;
			console.log('twitterInstance', this.twitterInstance);

		}
	}
	// AAAAAAAAAAAAAAAAAAAAAM3yHAEAAAAAziVdtjBXArIgVtiFeHPm2xGbVvU%3DyahfMyOzLJrcpwR1YMRB6k7l2F9klcPInuS9oIPPX3EOHcetFy


	onModuleInit() {
		this.initTwitter();
	}
}
