import { MerchantsTypes } from "../../types/merchantsTypes"

import {
	MerchantsGetAction,
	MerchantsGetSuccessAction,
	IMerchantsGetSuccessPayload,
	MerchantsGetErrorAction,
	MerchantsGetSelected
} from "./__types/IActions"

export function merchantsGetRequest(): MerchantsGetAction {
	return {
		type: MerchantsTypes.MERCHANTS_GET_REQUEST
	}
}

export function merchantsGetSuccess(payload: IMerchantsGetSuccessPayload): MerchantsGetSuccessAction {
	return {
		payload,
		type: MerchantsTypes.MERCHANTS_GET_REQUEST_SUCCESS
	}
}

export function merchantsGetError(payload: string): MerchantsGetErrorAction {
	return {
		payload,
		type: MerchantsTypes.MERCHANTS_GET_REQUEST_ERROR
	}
}

export function merchantsGetSelected(payload: string): MerchantsGetSelected {
	return {
		payload,
		type: MerchantsTypes.MERCHANTS_GET_SELECTED_MERCHANT
	}
}
