import { DefinedAppEnvironmentType } from "./base.constant";

export interface IEnvronmentVariable {
	AWS_REGION: string;
	AWS_ACCESS_KEY_ID: string;
	TWITTER_APP_KEY: string;
	TWITTER_APP_SECRET: string;
	TWITTER_ACCESS_TOKEN: string;
	TWITTER_ACCESS_SECRET: string;
	AWS_SECRET_ACCESS_KEY: string;
	NODE_ENV: DefinedAppEnvironmentType;
}

export type ObjectType = Record<string, any>;
