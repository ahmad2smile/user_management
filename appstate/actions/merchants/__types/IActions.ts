import { MerchantsTypes } from "../../../types/merchantsTypes"

export interface IMerchantsGetPayload {
	readonly limit?: number
	readonly offset?: number
	readonly sort?: string
	readonly order?: "asc" | "desc"
}
export type MerchantsGetAction = IAction<IMerchantsGetPayload, MerchantsTypes>

export type IMerchantsGetSuccessPayload = ReadonlyArray<IMerchant>
export type MerchantsGetSuccessAction = IAction<IMerchantsGetSuccessPayload, MerchantsTypes>

export type IMerchantsGetUpdatePayload = ReadonlyArray<IMerchant>
export type MerchantsGetUpdateAction = IAction<IMerchantsGetUpdatePayload, MerchantsTypes>

export type MerchantsGetErrorAction = IAction<string, MerchantsTypes>

export type MerchantsGetSelected = IAction<string, MerchantsTypes>

export type MerchantsActions =
	| MerchantsGetAction
	| MerchantsGetSuccessAction
	| MerchantsGetUpdateAction
	| MerchantsGetErrorAction
	| MerchantsGetSelected
