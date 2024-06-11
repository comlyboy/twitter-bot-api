import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BotService } from './bot.service';
import { CreateBotDto } from './dto/bot.dto';

@Controller('bot')
export class BotController {
	constructor(private readonly botService: BotService) { }

	@Post()
	createBot(
		@Body() createBotDto: CreateBotDto
	) {
		return this.botService.createBot(createBotDto);
	}

	@Get()
	findAll() {
		return this.botService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.botService.findOne(+id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateBotDto: any) {
		return this.botService.update(+id, updateBotDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.botService.remove(+id);
	}
}
