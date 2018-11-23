import { MerchantsTypes } from "../../types/merchantsTypes"

import {
	MerchantsActions,
	MerchantsGetSuccessAction,
	MerchantsGetErrorAction,
	MerchantsGetUpdateAction,
	MerchantsDeleteErrorAction,
	MerchantsCreateErrorAction,
	MerchantsUpdateErrorAction,
	MerchantGetSelectedSuccessAction,
	MerchantGetSelectedErrorAction,
	MerchantsUpdateAction
} from "../../actions/merchants/__types/IActions"

import { API } from "../../../__typings__/api"

export const initialState: IMerchants = {
	merchants: [],
	merchantsCount: 10,
	selectedMerchant: {
		id: "",
		avatarUrl: "",
		firstname: "",
		lastname: "",
		email: "",
		phone: "",
		hasPremium: false,
		bids: [
			{
				id: "",
				amount: 0,
				carTitle: "",
				created: ""
			}
		]
	},
	optimisticSelectedMerchant: {
		id: "",
		avatarUrl: "",
		firstname: "",
		lastname: "",
		email: "",
		phone: "",
		hasPremium: false,
		bids: [
			{
				id: "",
				amount: 0,
				carTitle: "",
				created: ""
			}
		]
	},
	merchantsGetState: API.NOT_REQUESTED,
	merchantsGetError: "",
	merchantsGetSelectedState: API.NOT_REQUESTED,
	merchantsGetSelectedError: "",
	merchantsDeleteState: API.NOT_REQUESTED,
	merchantsDeleteError: "",
	merchantsCreateState: API.NOT_REQUESTED,
	merchantsCreateError: "",
	merchantsUpdateState: API.NOT_REQUESTED,
	merchantsUpdateError: "",
	merchantsDrawerState: false
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
		case MerchantsTypes.MERCHANTS_GET_SELECTED_REQUEST:
			return {
				...state,
				merchantsGetSelectedState: API.REQUEST_PENDING
			}
		case MerchantsTypes.MERCHANTS_GET_SELECTED_SUCCESS:
			return {
				...state,
				selectedMerchant: (action as MerchantGetSelectedSuccessAction).payload.merchant,
				merchantsGetSelectedState: API.REQUEST_ERROR
			}
		case MerchantsTypes.MERCHANTS_GET_SELECTED_ERROR:
			return {
				...state,
				merchantsGetSelectedState: API.REQUEST_ERROR,
				merchantsGetSelectedError: (action as MerchantGetSelectedErrorAction).payload
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
		case MerchantsTypes.MERCHANTS_UPDATE_REQUEST:
			return {
				...state,
				merchants: state.merchants.map((merchant: IMerchant) => {
					if (merchant.id === (action as MerchantsUpdateAction).payload.id) {
						return { ...(action as MerchantsUpdateAction).payload }
					}

					return merchant
				}),
				selectedMerchant: { ...(action as MerchantsUpdateAction).payload },
				optimisticSelectedMerchant: { ...(state.selectedMerchant as IMerchant) },
				merchantsUpdateState: API.REQUEST_PENDING
			}
		case MerchantsTypes.MERCHANTS_UPDATE_REQUEST_SUCCESS:
			return {
				...state,
				merchantsUpdateState: API.REQUEST_SUCCESS
			}
		case MerchantsTypes.MERCHANTS_UPDATE_REQUEST_ERROR:
			return {
				...state,
				merchants: state.merchants.map((merchant: IMerchant) => {
					if (merchant.id === state.optimisticSelectedMerchant.id) {
						return { ...state.optimisticSelectedMerchant }
					}

					return merchant
				}),
				selectedMerchant: { ...state.optimisticSelectedMerchant },
				merchantsUpdateError: (action as MerchantsUpdateErrorAction).payload,
				merchantsUpdateState: API.REQUEST_ERROR
			}
		case MerchantsTypes.MERCHANTS_UPDATE_STATE_RESET:
			return {
				...state,
				merchantsUpdateState: API.NOT_REQUESTED
			}
		case MerchantsTypes.MERCHANTS_DRAWER_TOGGLE:
			return {
				...state,
				merchantsDrawerState: !state.merchantsDrawerState
			}
		default:
			return state
	}
}
