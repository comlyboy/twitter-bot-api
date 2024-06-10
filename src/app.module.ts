import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { LookUpModule } from './core';
import { TwitterModule, UtilityModule } from './common';

@Module({
	controllers: [AppController],
	imports: [
		// EventModule,
		// AuthModule,
		LookUpModule,
		TwitterModule,
		UtilityModule,
	]
})
export class AppModule { }
