import { Test, TestingModule } from '@nestjs/testing';
import { EventBridgeController } from './event-bridge.controller';
import { EventBridgeService } from './event-bridge.service';

describe('EventBridgeController', () => {
  let controller: EventBridgeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventBridgeController],
      providers: [EventBridgeService],
    }).compile();

    controller = module.get<EventBridgeController>(EventBridgeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
