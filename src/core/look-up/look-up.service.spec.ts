import { Test, TestingModule } from '@nestjs/testing';
import { LookUpService } from './look-up.service';

describe('LookUpService', () => {
  let service: LookUpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LookUpService],
    }).compile();

    service = module.get<LookUpService>(LookUpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
