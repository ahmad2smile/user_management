import { call, takeLatest, put } from "redux-saga/effects"

import { merchantsGetSuccess, merchantsGetError, merchantsGetUpdate } from "../../actions/merchants/merchantsActions"

import { getMerchants } from "../../../services/dataService"

import { MerchantsTypes } from "../../types/merchantsTypes"

import { MerchantsGetAction } from "../../actions/merchants/__types/IActions"

export function* merchantsGetSaga(action: MerchantsGetAction) {
	try {
		const response = yield call(getMerchants, action.payload)

		const merchants: ReadonlyArray<IMerchant> = response.data

		if (action.payload.offset) {
			yield put(merchantsGetUpdate(merchants))
		} else {
			yield put(merchantsGetSuccess(merchants))
		}
	} catch (err) {
		yield put(merchantsGetError(err))
	}
}

export function* merchantsGetSagaWatcher() {
	yield takeLatest(MerchantsTypes.MERCHANTS_GET_REQUEST, merchantsGetSaga)
}
