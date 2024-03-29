import { call, throttle, put } from "redux-saga/effects"

import { merchantsGetSuccess, merchantsGetError, merchantsGetUpdate } from "../../actions/merchants/merchantsActions"

import { getMerchants } from "../../../services/dataService"

import { MerchantsTypes } from "../../types/merchantsTypes"

import { MerchantsGetAction } from "../../actions/merchants/__types/IActions"

export function* merchantsGetSaga(action: MerchantsGetAction) {
	try {
		const response = yield call(getMerchants, action.payload)

		const merchants: ReadonlyArray<IMerchant> = response.data
		const merchantsCount: number = Number(response.headers["x-total-count"]) || 0

		if (action.payload.offset) {
			yield put(merchantsGetUpdate({ merchants, merchantsCount }))
		} else {
			yield put(merchantsGetSuccess({ merchants, merchantsCount }))
		}
	} catch (err) {
		yield put(merchantsGetError(err))
	}
}

export function* merchantsGetSagaWatcher() {
	yield throttle(500, MerchantsTypes.MERCHANTS_GET_REQUEST, merchantsGetSaga)
}
