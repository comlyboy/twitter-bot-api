import { Module } from '@nestjs/common';
import { DynamodbService } from './dynamodb.service';
import { DynamodbController } from './dynamodb.controller';

@Module({
  controllers: [DynamodbController],
  providers: [DynamodbService]
})
export class DynamodbModule {}
