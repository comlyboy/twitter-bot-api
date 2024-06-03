import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';

import { Request, Response } from 'express';
import { ObjectType, ResponseMessageEnum } from 'src/common';


@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {

	catch(exception: HttpException, host: ArgumentsHost) {
		const http = host.switchToHttp();
		const response = http.getResponse<Response>();
		const { method, url } = http.getRequest<Request>();
		let statusCode = exception?.getStatus() || HttpStatus.INTERNAL_SERVER_ERROR;
		let message: string = (exception as ObjectType)?.response?.message || exception?.message || ResponseMessageEnum.INTERNAL_SERVER_ERROR;
		if (Array.isArray(message)) {
			message = JSON.stringify(message);
		}

		if (statusCode > 499 && (message === '' || !message)) {
			message = ResponseMessageEnum.INTERNAL_SERVER_ERROR
		}

		if (message === 'Unauthorized' && statusCode === HttpStatus.UNAUTHORIZED) {
			statusCode = HttpStatus.UNAUTHORIZED;
			message = ResponseMessageEnum.LOGIN_SESSION_EXPIRED;
		}

		const error = {
			statusCode,
			timestamp: new Date().toISOString(),
			method,
			path: url,
			message
		};

		if (statusCode > 499 && statusCode < 600) {
			console.log(`ERROR => ${JSON.stringify(error)}`);
		}

		response.status(statusCode).json({ error });
	}
}