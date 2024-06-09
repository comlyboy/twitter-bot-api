import { Module } from '@nestjs/common';

import { LookUpModule } from './core';
import { TwitterModule } from './common';
import { AppController } from './app.controller';
import { EventModule } from './core/event/event.module';

@Module({
	controllers: [AppController],
	imports: [
		// AuthModule,
		LookUpModule,
		TwitterModule,
		EventModule,
	]
})
export class AppModule { }
