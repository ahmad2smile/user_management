import { call, takeLatest, put, select } from "redux-saga/effects"

import {
	merchantsCreateSuccess,
	merchantsCreateError,
	merchantsDrawerToggle
} from "../../actions/merchants/merchantsActions"

import { createNewMerchant } from "../../../services/dataService"

import { MerchantsTypes } from "../../types/merchantsTypes"

import { MerchantsCreateAction } from "../../actions/merchants/__types/IActions"

export function* merchantsCreateSaga(action: MerchantsCreateAction) {
	try {
		const token: string = yield select(({ auth }: IRootState) => auth.authToken)

		yield call(createNewMerchant, { merchant: action.payload, token })

		yield put(merchantsCreateSuccess())
		yield put(merchantsDrawerToggle())
	} catch (err) {
		yield put(merchantsCreateError(err))
	}
}

export function* merchantsCreateSagaWatcher() {
	yield takeLatest(MerchantsTypes.MERCHANTS_CREATE_REQUEST, merchantsCreateSaga)
}
