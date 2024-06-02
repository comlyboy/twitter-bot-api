import { Module } from '@nestjs/common';
import { KinesisService } from './kinesis.service';
import { KinesisController } from './kinesis.controller';

@Module({
  controllers: [KinesisController],
  providers: [KinesisService]
})
export class KinesisModule {}
