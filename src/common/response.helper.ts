import { Response } from "express";
import { ObjectType, IErrorResponse } from "./base.interface";


export class ApiResult<TBody extends ObjectType | ObjectType[] = any> {
	readonly data: TBody;
	readonly message: string;
	readonly error: IErrorResponse;

	constructor(params?: {
		data?: TBody;
		message?: string;
		error?: IErrorResponse;
	}) {
		this.data = params?.data || null;
		this.message = params?.message || null;
		this.error = params?.error || null;
	}
}


export class ApiResponseBuilder<TBody extends ObjectType | ObjectType[] = any> {
	constructor(res: Response, response: ApiResult<TBody> = null, status = 200) {
		return res.status(status).json({
			statusCode: status,
			...response
		});
	}
}
