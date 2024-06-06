import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { Request } from 'express';

export const CurrentEventBridgeBody = createParamDecorator(
	(data: any, context: ExecutionContext) => {
		const request = context.switchToHttp().getRequest<Request>();
		console.log('event-bridge schedule reached:', JSON.stringify(request.body));
		return request.body?.Records;
	}
);
