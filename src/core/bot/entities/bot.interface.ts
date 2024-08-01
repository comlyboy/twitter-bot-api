import { IBaseCreateEditDate, IBaseEntityName, IBaseId, IBaseName } from "src/common";

export interface IBot extends IBaseId, IBaseEntityName, IBaseCreateEditDate, IBaseName {
	credential: string;
}
