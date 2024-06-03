import { Injectable, OnModuleInit } from '@nestjs/common';

import { TwitterApiReadWrite, TwitterApi } from 'twitter-api-v2';

@Injectable()
export class TwitterService implements OnModuleInit {
	private twitterInstance: TwitterApiReadWrite;


	async postTweet(text: string, options: any) {
		return this.twitterInstance.v2.tweet(text, options);
	}

	async uploadMedia() {

	}

	async quoteTweet(text: string, tweetIdToQuote: string, option) {
		return await this.twitterInstance.v2.tweet({
			text, reply: { in_reply_to_tweet_id: tweetIdToQuote }
		});
	}


	private initTwitter() {
		if (!this.twitterInstance) {
			this.twitterInstance = new TwitterApi('AAAAAAAAAAAAAAAAAAAAAM3yHAEAAAAA4RqlQTQvM6Zv1nnh4anSYFinQe8%3DyENebmPxJj5xgAx57IzmJHFBPaNlU93JTBVcRBhfhsO3Kekhov').readWrite;
		}
	}


	onModuleInit() {
		this.initTwitter();
	}
}
