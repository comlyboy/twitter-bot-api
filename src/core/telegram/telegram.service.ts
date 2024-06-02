import { Injectable } from '@nestjs/common';

@Injectable()
export class TelegramService {

	async processEvent(reqBody: any) {
		console.log('telegram obj', reqBody);
		return;
	}

}
