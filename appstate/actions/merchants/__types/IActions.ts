import { MerchantsTypes } from "../../../types/merchantsTypes"

// -------------------------------------------
/* -----------------GET-------------- */
// -------------------------------------------

export interface IMerchantsGetPayload {
	readonly limit?: number
	readonly offset?: number
	readonly filter?: string
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

// -------------------------------------------
/* -----------------GET_SELECTED-------------- */
// -------------------------------------------

export type MerchantGetSelectedRequestAction = IAction<string, MerchantsTypes>

export interface IMerchantGetSelectedSuccessPayload {
	readonly merchant: IMerchant
}
export type MerchantGetSelectedSuccessAction = IAction<IMerchantGetSelectedSuccessPayload, MerchantsTypes>

export type MerchantGetSelectedErrorAction = IAction<string, MerchantsTypes>

// -------------------------------------------
/* -----------------DELETE-------------- */
// -------------------------------------------

export interface IMerchantsDeletePayload {
	readonly id: string
}
export type MerchantsDeleteAction = IAction<IMerchantsDeletePayload, MerchantsTypes>

export type MerchantsDeleteSuccessAction = IAction<undefined, MerchantsTypes>

export type MerchantsDeleteErrorAction = IAction<string, MerchantsTypes>

// -------------------------------------------
/* -----------------CREATE-------------- */
// -------------------------------------------
export interface IMerchantsCreatePayload extends IMerchant {}
export type MerchantsCreateAction = IAction<IMerchantsCreatePayload, MerchantsTypes>

export type MerchantsCreateSuccessAction = IAction<undefined, MerchantsTypes>

export type MerchantsCreateErrorAction = IAction<string, MerchantsTypes>

// -------------------------------------------
/* -----------------UPDATE-------------- */
// -------------------------------------------
export interface IMerchantsUpdatePayload extends IMerchant {}
export type MerchantsUpdateAction = IAction<IMerchantsUpdatePayload, MerchantsTypes>

export type MerchantsUpdateSuccessAction = IAction<undefined, MerchantsTypes>

export type MerchantsUpdateErrorAction = IAction<string, MerchantsTypes>

export type MerchantsUpdateStateResetAction = IAction<undefined, MerchantsTypes>

// -------------------------------------------
/* -----------------TOGGLE-------------- */
// -------------------------------------------

export type MerchantsDrawerToggleAction = IAction<undefined, MerchantsTypes>

export type MerchantsActions =
	| MerchantsGetAction
	| MerchantsGetSuccessAction
	| MerchantsGetUpdateAction
	| MerchantsGetErrorAction
	| MerchantGetSelectedRequestAction
	| MerchantGetSelectedSuccessAction
	| MerchantGetSelectedErrorAction
	| MerchantsDeleteAction
	| MerchantsDeleteSuccessAction
	| MerchantsDeleteErrorAction
	| MerchantsCreateAction
	| MerchantsCreateSuccessAction
	| MerchantsCreateErrorAction
	| MerchantsDrawerToggleAction
	| MerchantsUpdateAction
	| MerchantsUpdateSuccessAction
	| MerchantsUpdateErrorAction
	| MerchantsUpdateStateResetAction
