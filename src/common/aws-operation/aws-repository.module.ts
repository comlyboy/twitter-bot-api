import { Global, Module } from '@nestjs/common';

import { AwsDynamoRepositoryService } from './aws-dynamo-operation.service';

@Global()
@Module({
	providers: [AwsDynamoRepositoryService],
	exports: [AwsDynamoRepositoryService]
})
export class AwsRepositoryModule { }
