import { MerchantsTypes } from "../../types/merchantsTypes"

import {
	MerchantsActions,
	MerchantsGetSuccessAction,
	MerchantsGetErrorAction,
	MerchantsGetSelected,
	MerchantsGetUpdateAction
} from "../../actions/merchants/__types/IActions"

import { API } from "../../../__typings__/api"

export const initialState: IMerchants = {
	merchants: [],
	selectedMerchant: {},
	merchantsGetRequest: API.NOT_REQUESTED,
	merchantsGetError: ""
}

export function merchantsReducer(state: IMerchants = initialState, action: MerchantsActions): IMerchants {
	switch (action.type) {
		case MerchantsTypes.MERCHANTS_GET_REQUEST:
			return {
				...state,
				merchantsGetRequest: API.REQUEST_PENDING
			}
		case MerchantsTypes.MERCHANTS_GET_REQUEST_SUCCESS:
			return {
				...state,
				merchants: [...(action as MerchantsGetSuccessAction).payload],
				selectedMerchant: {
					...((action as MerchantsGetSuccessAction).payload[0] &&
						(action as MerchantsGetSuccessAction).payload[0])
				},
				merchantsGetRequest: API.REQUEST_SUCCESS
			}
		case MerchantsTypes.MERCHANTS_GET_REQUEST_UPDATE:
			return {
				...state,
				merchants: [...state.merchants, ...(action as MerchantsGetUpdateAction).payload],
				merchantsGetRequest: API.REQUEST_SUCCESS
			}
		case MerchantsTypes.MERCHANTS_GET_REQUEST_ERROR:
			return {
				...state,
				merchantsGetError: (action as MerchantsGetErrorAction).payload,
				merchantsGetRequest: API.REQUEST_ERROR
			}
		case MerchantsTypes.MERCHANTS_GET_SELECTED_MERCHANT:
			return {
				...state,
				selectedMerchant: state.merchants.find(
					(merchant: IMerchant) => merchant.id === (action as MerchantsGetSelected).payload
				),
				merchantsGetRequest: API.REQUEST_ERROR
			}
		default:
			return state
	}
}
