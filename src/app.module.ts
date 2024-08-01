import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { LookUpModule } from './core';
import { AwsRepositoryModule, CachingModule, TwitterModule, UtilityModule } from './common';
import { BotModule } from './core/bot/bot.module';

@Module({
	controllers: [AppController],
	imports: [
		AwsRepositoryModule,
		CachingModule,
		// EventModule,
		// AuthModule,
		LookUpModule,
		TwitterModule,
		UtilityModule,
		BotModule,
	]
})
export class AppModule { }
