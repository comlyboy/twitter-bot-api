import { Test, TestingModule } from '@nestjs/testing';
import { KinesisService } from './kinesis.service';

describe('KinesisService', () => {
  let service: KinesisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KinesisService],
    }).compile();

    service = module.get<KinesisService>(KinesisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
