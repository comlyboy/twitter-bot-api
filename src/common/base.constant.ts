export const WORKINANCE_ID_DIVIDER = ':::';

export enum DefinedAppEnvironmentEnum {
	DEVELOPMENT = 'development',
	PRODUCTION = 'production',
	STAGING = 'staging'
}

export type DefinedAppEnvironmentType = `${DefinedAppEnvironmentEnum}`;

export enum ResponseMessageEnum {
	INTERNAL_SERVER_ERROR = 'Error occured in the server!',
	ADD_SUCCESS = 'Added successfully!',
	CREATED_SUCCESS = 'Created successfully!',
	NOT_SUCCESS = 'Not successful. Kindly try again!',
	UPDATE_SUCCESS = 'Updated successfully!',
	DELETE_SUCCESS = 'Deleted successfully!',
	ROLE_MISMACHED = 'You do not have the permission(s) to perform this action(s)!',
	WRONG_PASSWORD = 'Invalid login credentials!',
	LOGIN_SESSION_EXPIRED = 'Your login session has expired. Please log in again!',
	UNAUTHENTICATED = 'You are not authenticated. Kindly login!',
	SUSPEND = 'Suspended successfully!',
	UNSUSPENDED = 'Unsuspended successfully!',
	NO_BUSINESS_FOUND = 'No business created/selected!',
	NO_USER_EXIST = 'Can\'t verify user account existence!',
	INVALID_TOKEN = 'Invalid token!'
}

export enum EntityNameEnum {
	BOT = 'bot',
	GOOGLE_TREND = 'google-trend',
	USER = 'user'
}
export type EntityNameType = `${EntityNameEnum}`;

export enum DefinedGSIName {
	getItemsByEntityNameCreateDateIndex = 'entityName_createdAtDate_index',
	getItemsByEntityBotCreatedDateIndex = 'entityNameBot_createdAtDate_index',
}