import { MerchantsTypes } from "../../types/merchantsTypes"

import {
	MerchantsActions,
	MerchantsGetSuccessAction,
	MerchantsGetErrorAction,
	MerchantsGetSelected,
	MerchantsGetUpdateAction,
	MerchantsDeleteErrorAction,
	MerchantsCreateErrorAction
} from "../../actions/merchants/__types/IActions"

import { API } from "../../../__typings__/api"

export const initialState: IMerchants = {
	merchants: [],
	merchantsCount: 10,
	selectedMerchant: {},
	merchantsGetState: API.NOT_REQUESTED,
	merchantsGetError: "",
	merchantsDeleteState: API.NOT_REQUESTED,
	merchantsDeleteError: "",
	merchantsCreateState: API.NOT_REQUESTED,
	merchantsCreateError: ""
}

export function merchantsReducer(state: IMerchants = initialState, action: MerchantsActions): IMerchants {
	switch (action.type) {
		case MerchantsTypes.MERCHANTS_GET_REQUEST:
			return {
				...state,
				merchantsGetState: API.REQUEST_PENDING
			}
		case MerchantsTypes.MERCHANTS_GET_REQUEST_SUCCESS:
			return {
				...state,
				merchants: [...(action as MerchantsGetSuccessAction).payload.merchants],
				merchantsCount: (action as MerchantsGetSuccessAction).payload.merchantsCount,
				selectedMerchant: {
					...((action as MerchantsGetSuccessAction).payload.merchants[0] &&
						(action as MerchantsGetSuccessAction).payload.merchants[0])
				},
				merchantsGetState: API.REQUEST_SUCCESS
			}
		case MerchantsTypes.MERCHANTS_GET_REQUEST_UPDATE:
			return {
				...state,
				merchants: [...state.merchants, ...(action as MerchantsGetUpdateAction).payload.merchants],
				merchantsCount: (action as MerchantsGetUpdateAction).payload.merchantsCount,
				merchantsGetState: API.REQUEST_SUCCESS
			}
		case MerchantsTypes.MERCHANTS_GET_REQUEST_ERROR:
			return {
				...state,
				merchantsGetError: (action as MerchantsGetErrorAction).payload,
				merchantsGetState: API.REQUEST_ERROR
			}
		case MerchantsTypes.MERCHANTS_GET_SELECTED_MERCHANT:
			return {
				...state,
				selectedMerchant: state.merchants.find(
					(merchant: IMerchant) => merchant.id === (action as MerchantsGetSelected).payload
				),
				merchantsGetState: API.REQUEST_ERROR
			}
		case MerchantsTypes.MERCHANTS_DELETE_REQUEST:
			return {
				...state,
				merchantsDeleteState: API.REQUEST_PENDING
			}
		case MerchantsTypes.MERCHANTS_DELETE_REQUEST_SUCCESS:
			return {
				...state,
				merchantsDeleteState: API.REQUEST_SUCCESS
			}
		case MerchantsTypes.MERCHANTS_DELETE_REQUEST_ERROR:
			return {
				...state,
				merchantsDeleteError: (action as MerchantsDeleteErrorAction).payload,
				merchantsDeleteState: API.REQUEST_ERROR
			}
		case MerchantsTypes.MERCHANTS_CREATE_REQUEST:
			return {
				...state,
				merchantsCreateState: API.REQUEST_PENDING
			}
		case MerchantsTypes.MERCHANTS_CREATE_REQUEST_SUCCESS:
			return {
				...state,
				merchantsCreateState: API.REQUEST_SUCCESS
			}
		case MerchantsTypes.MERCHANTS_CREATE_REQUEST_ERROR:
			return {
				...state,
				merchantsCreateError: (action as MerchantsCreateErrorAction).payload,
				merchantsCreateState: API.REQUEST_ERROR
			}
		default:
			return state
	}
}
