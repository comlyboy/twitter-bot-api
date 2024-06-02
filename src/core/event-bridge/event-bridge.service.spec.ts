import { Test, TestingModule } from '@nestjs/testing';
import { EventBridgeService } from './event-bridge.service';

describe('EventBridgeService', () => {
  let service: EventBridgeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventBridgeService],
    }).compile();

    service = module.get<EventBridgeService>(EventBridgeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
