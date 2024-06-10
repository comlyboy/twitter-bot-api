import { ApplicationEnvironmentEnum, ApplicationEnvironmentType, IEnvronmentVariable } from "src/common";

require('dotenv').config();

export const EnvironmentConfig: Readonly<IEnvronmentVariable> = {
	NODE_ENV: process.env.NODE_ENV?.toLowerCase() as ApplicationEnvironmentType || ApplicationEnvironmentEnum.DEVELOPMENT,
	BOT_API_SECRET_KEY: process.env.BOT_SERVER_SECRET_KEY,
	...process.env
};
