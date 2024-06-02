import { Module } from '@nestjs/common';

import { ApiGatewayModule } from './core/api-gateway/api-gateway.module';
import { EventBridgeModule } from './core/event-bridge/event-bridge.module';
import { SqsModule } from './core/sqs/sqs.module';
import { TelegramModule } from './core';

@Module({
	imports: [
		SqsModule,
		EventBridgeModule,
		ApiGatewayModule,
		TelegramModule
	],
	providers: []
})
export class AppModule { }
