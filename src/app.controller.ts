import { Controller, Get } from "@nestjs/common";
import { EnvironmentConfig } from "./configuration";

@Controller()
export class AppController {

	@Get('health')
	create() {
		return {
			message: 'lambda API is running OKAY!!!',
			timestamp: new Date().toISOString(),
			environment: EnvironmentConfig.NODE_ENV
		}
	}

}