import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { Bot, webhookCallback } from 'grammy';

import { AppModule } from './app.module';
import { EnvironmentConfig } from './common';
import { HttpExceptionFilter } from './filter/http-exception.filter';
import { NestExpressApplication } from '@nestjs/platform-express';

// https://stackoverflow.com/questions/68932747/adding-nestjs-as-express-module-results-in-nest-being-restarted
// https://stackoverflow.com/questions/54349998/use-nestjs-package-in-nodejs-express-project/67719723#67719723
export async function bootstrapApplication() {
	const bot = new Bot(EnvironmentConfig.TELEGRAM_SECERET_KEY);
	const nestApplication = await NestFactory.create<NestExpressApplication>(AppModule);
	nestApplication.useGlobalFilters(new HttpExceptionFilter());
	nestApplication.useGlobalPipes(new ValidationPipe());
	nestApplication.use(webhookCallback(bot,'aws-lambda-async'));
	return { nestApplication };
}