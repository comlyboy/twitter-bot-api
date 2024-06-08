import { Injectable } from '@nestjs/common';

import googleTrends from 'google-trends-api';
import { HttpService, ObjectType } from 'src/common';
import { IGoogleGeoTrend, IGoogleTrendTimeline, IGoogleTrendTopic, ITrendParams } from './look-up.interface';
// import { HttpsProxyAgent } from 'https-proxy-agent';

@Injectable()
export class LookUpGoogleService {
	// private proxyAgent = new HttpsProxyAgent('http://proxy-host:8888/');
	// private BASE_GOOGLE_TREND_URL = '';

	constructor(
		private httpService: HttpService
	) { }

	// https://www.npmjs.com/package/google-trends-api#autocomplete
	async autoComplete({ keyword }: { keyword: string; }) {
		const topics = await googleTrends.autoComplete({ keyword });
		return JSON.parse(topics).default as IGoogleTrendTopic[];
	}

	// https://www.npmjs.com/package/google-trends-api#interestovertime
	async interestOverTime(params: ITrendParams) {
		const trends = await googleTrends.interestOverTime({ ...params });
		const rawTimelines = JSON.parse(trends).default.timelineData as ObjectType[];
		return {
			timeline: rawTimelines.map(timeline => {
				return {
					...timeline,
					time: +timeline?.time,
					value: timeline?.value?.at(0) || 0,
					hasData: timeline?.hasData?.at(0) || false,
					formattedValue: timeline?.formattedValue?.at(0) || '0'
				} as unknown as IGoogleTrendTimeline;
			})
		};
	}

	// https://www.npmjs.com/package/google-trends-api#dailytrends
	async dailyTrends(params: Pick<ITrendParams, 'geo' | 'trendDate'>) {
		const trends = await googleTrends.dailyTrends({ ...params });
		return JSON.parse(trends).default.trendingSearchesDays as ObjectType[];
	}


	// https://www.npmjs.com/package/google-trends-api#interestbyregion
	async interestByRegions(params: ITrendParams) {
		const trends = await googleTrends.interestByRegion({ ...params });
		const rawGeoData = JSON.parse(trends).default.geoMapData as ObjectType[];
		return {
			geoData: rawGeoData.map(geoData => {
				return {
					...geoData,
					value: geoData?.value?.at(0) || 0,
					hasData: geoData?.hasData?.at(0) || false,
					formattedValue: geoData?.formattedValue?.at(0) || '0'
				} as unknown as IGoogleGeoTrend;
			})
		}
	}


	// https://www.npmjs.com/package/google-trends-api#realtimetrends
	async realtimeTrends(params: Pick<ITrendParams, 'geo' | 'category'>) {
		const trends = await googleTrends.realTimeTrends({ ...params });
		return trends //JSON.parse(trends) as ObjectType[];
	}

	// https://www.npmjs.com/package/google-trends-api#relatedqueries
	async relatedQueries(params: ITrendParams) {
		return googleTrends.relatedQueries({ ...params });
	}

	// https://www.npmjs.com/package/google-trends-api#relatedtopics
	async relatedTopics(params: ITrendParams) {
		return googleTrends.relatedTopics({ ...params }) as ObjectType[];
	}

	async getTrends() {
		const response = await this.httpService.sendHttpRequest({
			url: 'https://trends.google.com/trends/api/explore/pickers/category?hl=en-US&tz=240',
			method: 'get'
		});
		return JSON.parse(response.slice(5))
	}

}
