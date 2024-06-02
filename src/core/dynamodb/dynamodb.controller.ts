import { Controller, Post } from '@nestjs/common';

import { DynamodbService } from './dynamodb.service';


@Controller('dynamodb')
export class DynamodbController {
	constructor(private readonly dynamodbService: DynamodbService) { }

	@Post()
	findAll() {
		return this.dynamodbService.findAll();
	}

}
