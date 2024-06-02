import { Module } from '@nestjs/common';
import { SqsService } from './sqs.service';
import { SqsController } from './sqs.controller';

@Module({
  controllers: [SqsController],
  providers: [SqsService]
})
export class SqsModule {}
