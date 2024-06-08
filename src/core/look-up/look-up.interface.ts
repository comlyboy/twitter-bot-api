import { ObjectType } from "src/common";

export interface ITrendParams {
	geo?: string;
	category?: number;
	keyword?: string[] | string;
	startTime?: Date;
	endTime?: Date;
	/** For dailyTrends method */
	trendDate?: Date;
	resolution?: 'CITY' | 'COUNTRY' | 'REGION' | 'DMA';
}

export interface IGoogleTrendTopic {
	mid: string;
	title: string;
	type: 'Topics' | 'Compounds';
}

export interface IGoogleTrendTimeline {
	time: string;
	formattedTime: string;
	formattedAxisTime: string;
	value: number;
	hasData: boolean;
	formattedValue: string;
	isPartial: boolean
}

export interface IGoogleGeoTrend extends Pick<IGoogleTrendTimeline, 'value' | 'hasData' | 'formattedValue'> {
	geoCode: string;
	geoName: string;
	maxValueIndex: number;
}

export interface IGoogleGeoTrend extends Pick<IGoogleTrendTimeline, 'value' | 'hasData' | 'formattedValue'> {
	featuredStoryIds: string[];
	trendingStoryIds: string[];
	storySummaries: {
		featuredStories: ObjectType[]
		trendingStories: ObjectType[];
	};
	date: string;
	hideAllImages: boolean;
}