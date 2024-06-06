import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';

import { Request, Response } from 'express';
import { ApiResponse, ObjectType, ResponseMessageEnum } from 'src/common';


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

		if (message === 'invalid signature') {
			statusCode = HttpStatus.UNPROCESSABLE_ENTITY;
			message = 'Invalid token signature!';
		}
		if (message === 'jwt malformed' || message === 'jwt must be provided') {
			statusCode = HttpStatus.UNPROCESSABLE_ENTITY;
			message = 'Invalid verification token!';
		}
		if (message === 'jwt expired') {
			statusCode = HttpStatus.UNPROCESSABLE_ENTITY;
			message = 'Token is expired!';
		}
		if (message === 'NOT_A_NUMBER') {
			message = 'Not a valid phone number!';
		}


		const error = {
			statusCode,
			timestamp: new Date().toISOString(),
			method,
			path: url,
			message
		};

		if (statusCode > 499 && statusCode < 600) {
			console.log('ERROR =>', error);
		}

		response.status(statusCode).json(new ApiResponse({ error, message }));
	}
}