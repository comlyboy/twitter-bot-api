import { Injectable } from '@nestjs/common';

import { CreateBotDto } from './dto/bot.dto';
import { ApiResult, AwsDynamoRepositoryService, EntityNameEnum, UtilityService } from 'src/common';
import { IBot } from './entities/bot.interface';

@Injectable()
export class BotService {

	constructor(
		private readonly utilityService: UtilityService,
		private readonly awsDynamoRepositoryService: AwsDynamoRepositoryService
	) { }

	async createBot(createBotDto: CreateBotDto) {
		// const hashedCredential = this.utilityService.EncryptData({
		// })
		const createdBot = await this.awsDynamoRepositoryService.runPutCommand<IBot>({
			Item: {
				id: this.utilityService.GenerateCustomUUID(),
				entityName: EntityNameEnum.BOT,
				name: createBotDto.name,
				createdAtDate: this.utilityService.GenerateISODate(),
				credential: ''
			},
		});

		return new ApiResult({ data: createdBot });
	}

	findAll() {
		return `This action returns all bot`;
	}

	findOne(id: number) {
		return `This action returns a #${id} bot`;
	}

	update(id: number, updateBotDto: any) {
		return `This action updates a #${id} bot`;
	}

	remove(id: number) {
		return `This action removes a #${id} bot`;
	}
}
