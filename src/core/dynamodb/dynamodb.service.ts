import { Injectable } from '@nestjs/common';

@Injectable()
export class DynamodbService {

	findAll() {
		return `This action returns all dynamodb`;
	}

}
