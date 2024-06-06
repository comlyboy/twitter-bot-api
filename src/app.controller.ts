import { Controller, Get } from "@nestjs/common";
import { EnvironmentConfig } from "./configuration";

@Controller()
export class AppController {

	@Get('health')
	create() {
		return {
			message: 'lambda API is running OKAY!!!',
			environment: EnvironmentConfig
		}
	}

}