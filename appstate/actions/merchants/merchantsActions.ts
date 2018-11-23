import { MerchantsTypes } from "../../types/merchantsTypes"

import {
	IMerchantsCreatePayload,
	IMerchantsDeletePayload,
	IMerchantsGetPayload,
	IMerchantsGetSuccessPayload,
	MerchantsCreateAction,
	MerchantsCreateErrorAction,
	MerchantsCreateSuccessAction,
	MerchantsDeleteAction,
	MerchantsDeleteErrorAction,
	MerchantsDeleteSuccessAction,
	MerchantsGetAction,
	MerchantsGetErrorAction,
	MerchantGetSelectedRequestAction,
	MerchantsGetSuccessAction,
	MerchantsGetUpdateAction,
	MerchantsDrawerToggleAction,
	IMerchantsUpdatePayload,
	MerchantsUpdateAction,
	MerchantsUpdateSuccessAction,
	MerchantsUpdateErrorAction,
	MerchantGetSelectedSuccessAction,
	IMerchantGetSelectedSuccessPayload,
	MerchantGetSelectedErrorAction,
	MerchantsUpdateStateResetAction
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

export function merchantsGetUpdate(payload: IMerchantsGetSuccessPayload): MerchantsGetUpdateAction {
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

export function merchantGetSelectedRequest(payload: string): MerchantGetSelectedRequestAction {
	return {
		payload,
		type: MerchantsTypes.MERCHANTS_GET_SELECTED_REQUEST
	}
}

export function merchantGetSelectedSuccess(
	payload: IMerchantGetSelectedSuccessPayload
): MerchantGetSelectedSuccessAction {
	return {
		payload,
		type: MerchantsTypes.MERCHANTS_GET_SELECTED_SUCCESS
	}
}

export function merchantGetSelectedError(payload: string): MerchantGetSelectedErrorAction {
	return {
		payload,
		type: MerchantsTypes.MERCHANTS_GET_SELECTED_ERROR
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

export function merchantsCreateRequest(payload: IMerchantsCreatePayload): MerchantsCreateAction {
	return {
		payload,
		type: MerchantsTypes.MERCHANTS_CREATE_REQUEST
	}
}

export function merchantsCreateSuccess(): MerchantsCreateSuccessAction {
	return {
		type: MerchantsTypes.MERCHANTS_CREATE_REQUEST_SUCCESS
	}
}

export function merchantsCreateError(payload: string): MerchantsCreateErrorAction {
	return {
		payload,
		type: MerchantsTypes.MERCHANTS_CREATE_REQUEST_ERROR
	}
}

export function merchantsUpdateRequest(payload: IMerchantsUpdatePayload): MerchantsUpdateAction {
	return {
		payload,
		type: MerchantsTypes.MERCHANTS_UPDATE_REQUEST
	}
}

export function merchantsUpdateSuccess(): MerchantsUpdateSuccessAction {
	return {
		type: MerchantsTypes.MERCHANTS_UPDATE_REQUEST_SUCCESS
	}
}

export function merchantsUpdateError(payload: string): MerchantsUpdateErrorAction {
	return {
		payload,
		type: MerchantsTypes.MERCHANTS_UPDATE_REQUEST_ERROR
	}
}

export function merchantsUpdateStateReset(): MerchantsUpdateStateResetAction {
	return {
		type: MerchantsTypes.MERCHANTS_UPDATE_STATE_RESET
	}
}

export function merchantsDrawerToggle(): MerchantsDrawerToggleAction {
	return {
		type: MerchantsTypes.MERCHANTS_DRAWER_TOGGLE
	}
}
