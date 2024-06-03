import { Module } from '@nestjs/common';
import { LookUpService } from './look-up.service';
import { LookUpController } from './look-up.controller';
import { LookUpBettingService } from './look-up-betting.service';
import { LookUpGoogleService } from './look-up-google.service';

@Module({
	controllers: [LookUpController],
	providers: [LookUpService, LookUpBettingService, LookUpGoogleService],
})
export class LookUpModule { }
