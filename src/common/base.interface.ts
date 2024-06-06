import { NativeAttributeValue } from "@aws-sdk/lib-dynamodb";

import { DefinedAppEnvironmentType, EntityNameType } from "./base.constant";

export interface IBaseId {
	id: string;
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
	NODE_ENV: DefinedAppEnvironmentType;
	BOT_SERVER_SECRET_KEY: string;
}

export type ObjectType = Record<string, NativeAttributeValue>;
