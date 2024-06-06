import { Global, Module } from '@nestjs/common';

import { HttpService } from '../service';
import { UtilityService } from './utility.service';

@Global()
@Module({
	providers: [UtilityService, HttpService],
	exports: [UtilityService, HttpService]
})
export class UtilityModule { }
