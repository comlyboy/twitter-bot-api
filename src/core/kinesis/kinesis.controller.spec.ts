import { Test, TestingModule } from '@nestjs/testing';
import { KinesisController } from './kinesis.controller';
import { KinesisService } from './kinesis.service';

describe('KinesisController', () => {
  let controller: KinesisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KinesisController],
      providers: [KinesisService],
    }).compile();

    controller = module.get<KinesisController>(KinesisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
