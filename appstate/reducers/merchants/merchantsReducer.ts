import { MerchantsTypes } from "../../types/merchantsTypes"

import {
	MerchantsActions,
	MerchantsGetSuccessAction,
	MerchantsGetErrorAction,
	MerchantsGetSelected
} from "../../actions/merchants/__types/IActions"

import { API } from "../../../__typings__/api"

export const initialState: IMerchants = {
	merchants: [],
	selectedMerchant: {},
	merchantsGetRequest: API.NOT_REQUESTED,
	merchantsGetError: ""
}

export function merchantsReducer(state: IMerchants = initialState, action: MerchantsActions): IMerchants {
	return (
		{
			[MerchantsTypes.MERCHANTS_GET_REQUEST]: {
				...state,
				merchantsGetRequest: API.REQUEST_PENDING
			},
			[MerchantsTypes.MERCHANTS_GET_REQUEST_SUCCESS]: {
				...state,
				...(action as MerchantsGetSuccessAction).payload,
				merchantsGetRequest: API.REQUEST_SUCCESS
			},
			[MerchantsTypes.MERCHANTS_GET_REQUEST_ERROR]: {
				...state,
				merchantsGetError: (action as MerchantsGetErrorAction).payload,
				merchantsGetRequest: API.REQUEST_ERROR
			},
			[MerchantsTypes.MERCHANTS_GET_SELECTED_MERCHANT]: {
				...state,
				selectedMerchant: state.merchants.find(
					(merchant: IMerchant) => merchant.id.value === (action as MerchantsGetSelected).payload
				),
				merchantsGetRequest: API.REQUEST_ERROR
			}
		}[action.type] || state
	)
}
