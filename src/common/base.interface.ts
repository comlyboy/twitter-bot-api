import { NativeAttributeValue } from "@aws-sdk/lib-dynamodb";

import { ApplicationEnvironmentType, EntityNameType } from "./base.constant";
import { APIGatewayProxyEventV2, Context, EventBridgeEvent } from "aws-lambda";

export interface IBaseId {
	id: string;
}

export interface IBaseName {
	name: string;
}

export interface IBaseCreateEditDate {
	createdAtDate: string;
	lastModifiedAtDate?: string;
}

export interface IBaseCreatorEditorId {
	creatorUserId?: string;
	creator?: any;
	lastModifierUserId?: string;
	lastModifier?: any;
}

export interface IBaseIsDelete {
	isDeleted: boolean;
	deleteAtDate?: string;
	deleteUserId?: string;
	deleter?: any;
}

export interface IBaseEntityName {
	entityName: EntityNameType;
}

export interface IErrorResponse {
	statusCode: number;
	timestamp: string,
	method: string;
	path: string;
	message: string;
}

export interface IEnvronmentVariable {
	NODE_ENV: ApplicationEnvironmentType;
	BOT_API_SECRET_KEY: string;
}

export interface IEventBridgeEvent extends EventBridgeEvent<string, ObjectType> { }

export type ObjectType = Record<string, NativeAttributeValue>;

export interface ICurrentInvocation{
	event: APIGatewayProxyEventV2;
	context:Context
}