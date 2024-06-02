import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export const CurrentSnsEventBody = createParamDecorator(
	(data: any, context: ExecutionContext) => {
		const request = context.switchToHttp().getRequest<Request>();
		console.log('current SNS record', JSON.stringify(request.body?.Records));
		return request.body?.Records as any[];
	}
);
