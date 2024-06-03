import { Test, TestingModule } from '@nestjs/testing';
import { LookUpController } from './look-up.controller';
import { LookUpService } from './look-up.service';

describe('LookUpController', () => {
  let controller: LookUpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LookUpController],
      providers: [LookUpService],
    }).compile();

    controller = module.get<LookUpController>(LookUpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
