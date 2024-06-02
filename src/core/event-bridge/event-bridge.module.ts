import { Module } from '@nestjs/common';
import { EventBridgeService } from './event-bridge.service';
import { EventBridgeController } from './event-bridge.controller';

@Module({
  controllers: [EventBridgeController],
  providers: [EventBridgeService]
})
export class EventBridgeModule {}
