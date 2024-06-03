import { Injectable } from '@nestjs/common';
import googleTrends from 'google-trends-api';


@Injectable()
export class LookUpGoogleService {

	async search(keyword: string[]) {
		return googleTrends.interestOverTime({ keyword })
	}



}
