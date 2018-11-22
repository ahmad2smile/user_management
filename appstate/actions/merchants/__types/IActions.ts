import { MerchantsTypes } from "../../../types/merchantsTypes"

export interface IMerchantsGetPayload {
	readonly limit?: number
	readonly offset?: number
	readonly sort?: string
	readonly order?: "asc" | "desc"
}
export type MerchantsGetAction = IAction<IMerchantsGetPayload, MerchantsTypes>

export interface IMerchantsGetSuccessPayload {
	readonly merchants: ReadonlyArray<IMerchant>
	readonly merchantsCount: number
}
export type MerchantsGetSuccessAction = IAction<IMerchantsGetSuccessPayload, MerchantsTypes>

export type MerchantsGetUpdateAction = IAction<IMerchantsGetSuccessPayload, MerchantsTypes>

export type MerchantsGetErrorAction = IAction<string, MerchantsTypes>

export type MerchantsGetSelected = IAction<string, MerchantsTypes>

export interface IMerchantsDeletePayload {
	readonly id: string
}
export type MerchantsDeleteAction = IAction<IMerchantsDeletePayload, MerchantsTypes>

export type MerchantsDeleteSuccessAction = IAction<undefined, MerchantsTypes>

export type MerchantsDeleteErrorAction = IAction<string, MerchantsTypes>

export interface IMerchantsCreatePayload extends IMerchant {}
export type MerchantsCreateAction = IAction<IMerchantsCreatePayload, MerchantsTypes>

export type MerchantsCreateSuccessAction = IAction<undefined, MerchantsTypes>

export type MerchantsCreateErrorAction = IAction<string, MerchantsTypes>

export type MerchantsActions =
	| MerchantsGetAction
	| MerchantsGetSuccessAction
	| MerchantsGetUpdateAction
	| MerchantsGetErrorAction
	| MerchantsGetSelected
	| MerchantsDeleteAction
	| MerchantsDeleteSuccessAction
	| MerchantsDeleteErrorAction
	| MerchantsCreateAction
	| MerchantsCreateSuccessAction
	| MerchantsCreateErrorAction
