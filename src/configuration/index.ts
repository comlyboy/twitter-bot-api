import { DefinedAppEnvironmentEnum, DefinedAppEnvironmentType } from "../common/base.constant";
import { IEnvronmentVariable } from "../common/base.interface";

require('dotenv').config();

export const EnvironmentConfig: IEnvronmentVariable = {
	NODE_ENV: process.env.NODE_ENV?.toLowerCase() as DefinedAppEnvironmentType || DefinedAppEnvironmentEnum.DEVELOPMENT,
	AWS_REGION: process.env.AWS_REGION,
	TWITTER_APP_KEY: process.env.TWITTER_APP_KEY,
	TWITTER_APP_SECRET: process.env.TWITTER_APP_SECRET,
	TWITTER_ACCESS_TOKEN: process.env.TWITTER_ACCESS_TOKEN,
	TWITTER_ACCESS_SECRET: process.env.TWITTER_ACCESS_SECRET,
	AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
	AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
} as const;
