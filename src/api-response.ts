export class ApiResponse {
	readonly data?: Record<string, any>;
	readonly message?: string;
	readonly status?: string;
	readonly stack?: string;
	readonly sttus?: string;

	constructor(response: {
		data?: Record<string, any>,
		message?: string,
	}) {
		this.data = response.data || null;
		this.message = response.message || null;
	}

}
