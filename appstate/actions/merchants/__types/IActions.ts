import { MerchantsTypes } from "../../../types/merchantsTypes"

export type MerchantsGetAction = IAction<undefined, MerchantsTypes>

export interface IMerchantsGetSuccessPayload extends Pick<IMerchants, "merchants"> {}
export type MerchantsGetSuccessAction = IAction<IMerchantsGetSuccessPayload, MerchantsTypes>

export type MerchantsGetErrorAction = IAction<string, MerchantsTypes>

export type MerchantsActions = MerchantsGetAction | MerchantsGetSuccessAction | MerchantsGetErrorAction
