import { Controller, Get, Body } from '@nestjs/common';

import { TelegramService } from './telegram.service';

@Controller('telegram')
export class TelegramController {
  constructor(private readonly telegramService: TelegramService) {}

  @Get()
	async processEvent(@Body() reqBody: any) {
		return this.telegramService.processEvent(reqBody);
  }

}
