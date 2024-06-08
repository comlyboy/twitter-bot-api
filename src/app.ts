import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

// import helmet from 'helmet';
import morgan from "morgan";
import { getCurrentInvoke } from '@codegenie/serverless-express';

import { AppModule } from './app.module';
import { AllExceptionFilter, HttpExceptionFilter } from './filter';


export async function bootstrapApplication() {
	const application = await NestFactory.create<NestExpressApplication>(AppModule);
	application.setGlobalPrefix('api');
	application.enableCors();
	// application.use(helmet());
	application.useGlobalFilters(new AllExceptionFilter(), new HttpExceptionFilter());
	application.useGlobalPipes(new ValidationPipe({
		whitelist: true, transform: true,
		transformOptions: { enableImplicitConversion: true }
	}));
	morgan.token('id', request => {
		return getCurrentInvoke().event?.requestContext?.requestId || Date.now().toString();
	});
	morgan.token('invocationId', request => getCurrentInvoke().context?.awsRequestId);
	application.use(morgan('LOG => :id | :invocationId | :date[iso] | :method | :status | :url - :total-time ms'));
	return { application };
}