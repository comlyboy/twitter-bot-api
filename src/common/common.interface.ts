import { DefinedAppEnvironmentType } from "./base.constant";

export interface IEnvronmentVariable {
	AWS_REGION: string;
	AWS_ACCESS_KEY_ID: string;
	TELEGRAM_SECERET_KEY: string;
	AWS_SECRET_ACCESS_KEY: string;
	NODE_ENV: DefinedAppEnvironmentType;
}
