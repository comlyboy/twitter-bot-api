import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { getCurrentInvoke } from '@vendia/serverless-express';

export const CurrentLambdaInvocation = createParamDecorator(
	(data: any, context: ExecutionContext) => {
		const currentInvocation = getCurrentInvoke();
		return {
			event: currentInvocation?.event || null,
			context: currentInvocation.context || null
		};
	}
);
