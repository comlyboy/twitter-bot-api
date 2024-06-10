import { Module } from '@nestjs/common';

import { LookUpModule } from './core';
import { TwitterModule } from './common';
import { AppController } from './app.controller';


@Module({
	controllers: [AppController],
	imports: [
		LookUpModule,
		TwitterModule,
	],
	providers: []
})
export class AppModule { }
