import { IErrorResponse, ObjectType } from "../base.interface";

export class ApiResponse<TBody extends ObjectType | ObjectType[]> {
	readonly message: string;
	readonly data: TBody;
	readonly error: IErrorResponse;

	constructor({ data, message, error }: {
		data?: TBody;
		error?: IErrorResponse;
		message?: string;
	}) {
		this.data = data || null;
		this.message = message || null;
		this.error = error || null;
	}

}
