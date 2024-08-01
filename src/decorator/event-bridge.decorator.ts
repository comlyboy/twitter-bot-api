import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { Request } from 'express';
import { IEventData } from 'src/core';

export const CurrentEventBridgeBody = createParamDecorator(
	(data: any, context: ExecutionContext) => {
		const request = context.switchToHttp().getRequest<Request>();
		return request.body?.detail || null as IEventData;
	}
);
