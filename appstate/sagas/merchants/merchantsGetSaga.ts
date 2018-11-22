import { call, takeLatest, put } from "redux-saga/effects"

import { merchantsGetSuccess, merchantsGetError, merchantsGetUpdate } from "../../actions/merchants/merchantsActions"

import { getMerchants } from "../../../services/dataService"

import { MerchantsTypes } from "../../types/merchantsTypes"

import { MerchantsGetAction } from "../../actions/merchants/__types/IActions"

export function* merchantsGetSaga(action: MerchantsGetAction) {
	try {
		const response = yield call(getMerchants, action.payload)

		const merchants: ReadonlyArray<IMerchant> = response.data
		const merchantsCount: number = Number(response.headers["x-total-count"])

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
	yield takeLatest(MerchantsTypes.MERCHANTS_GET_REQUEST, merchantsGetSaga)
}
