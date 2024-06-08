import { Injectable } from "@nestjs/common";

import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { ObjectType } from "../base.interface";

@Injectable()
export class HttpService {

	async sendHttpRequest<TResponse = any, TBody extends ObjectType = any>(options: AxiosRequestConfig<TBody>): Promise<TResponse> {
		try {
			const response = await axios({ ...options }) as unknown as AxiosResponse<TResponse, TBody>;
			return response.data as TResponse;
		} catch (error) {
			const errorObject = error?.response?.data;
			const message = errorObject?.message || 'Error occured in the http call!'
			throw { message, ...errorObject };
		}
	}
}