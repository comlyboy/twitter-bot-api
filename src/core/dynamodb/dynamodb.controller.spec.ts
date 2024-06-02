import { Test, TestingModule } from '@nestjs/testing';
import { DynamodbController } from './dynamodb.controller';
import { DynamodbService } from './dynamodb.service';

describe('DynamodbController', () => {
  let controller: DynamodbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DynamodbController],
      providers: [DynamodbService],
    }).compile();

    controller = module.get<DynamodbController>(DynamodbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
