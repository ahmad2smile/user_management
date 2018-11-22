import { MerchantsTypes } from "../../types/merchantsTypes"

import {
	IMerchantsGetPayload,
	MerchantsGetAction,
	MerchantsGetSuccessAction,
	IMerchantsGetSuccessPayload,
	MerchantsGetErrorAction,
	MerchantsGetSelected,
	MerchantsGetUpdateAction,
	IMerchantsGetUpdatePayload,
	IMerchantsDeletePayload,
	MerchantsDeleteAction,
	MerchantsDeleteSuccessAction,
	MerchantsDeleteErrorAction
} from "./__types/IActions"

export function merchantsGetRequest(payload: IMerchantsGetPayload): MerchantsGetAction {
	return {
		payload,
		type: MerchantsTypes.MERCHANTS_GET_REQUEST
	}
}

export function merchantsGetSuccess(payload: IMerchantsGetSuccessPayload): MerchantsGetSuccessAction {
	return {
		payload,
		type: MerchantsTypes.MERCHANTS_GET_REQUEST_SUCCESS
	}
}

export function merchantsGetUpdate(payload: IMerchantsGetUpdatePayload): MerchantsGetUpdateAction {
	return {
		payload,
		type: MerchantsTypes.MERCHANTS_GET_REQUEST_UPDATE
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

export function merchantsDeleteRequest(payload: IMerchantsDeletePayload): MerchantsDeleteAction {
	return {
		payload,
		type: MerchantsTypes.MERCHANTS_DELETE_REQUEST
	}
}

export function merchantsDeleteSuccess(): MerchantsDeleteSuccessAction {
	return {
		type: MerchantsTypes.MERCHANTS_DELETE_REQUEST_SUCCESS
	}
}

export function merchantsDeleteError(payload: string): MerchantsDeleteErrorAction {
	return {
		payload,
		type: MerchantsTypes.MERCHANTS_DELETE_REQUEST_ERROR
	}
}
