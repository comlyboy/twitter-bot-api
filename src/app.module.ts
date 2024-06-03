import { Module } from '@nestjs/common';

import { LookUpModule } from './core';
import { TwitterModule } from './common';


@Module({
	imports: [
		LookUpModule,
		TwitterModule,
	],
	providers: []
})
export class AppModule { }
