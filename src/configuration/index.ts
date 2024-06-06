import { DefinedAppEnvironmentEnum, DefinedAppEnvironmentType } from "../common/base.constant";
import { IEnvronmentVariable } from "../common/base.interface";

require('dotenv').config();

export const EnvironmentConfig: IEnvronmentVariable = {
	NODE_ENV: process.env.NODE_ENV?.toLowerCase() as DefinedAppEnvironmentType || DefinedAppEnvironmentEnum.DEVELOPMENT,
	BOT_SERVER_SECRET_KEY: process.env.BOT_SERVER_SECRET_KEY,
} as const;
