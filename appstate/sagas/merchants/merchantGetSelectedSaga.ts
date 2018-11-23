import { call, takeLatest, put, select } from "redux-saga/effects"

import { merchantGetSelectedSuccess, merchantGetSelectedError } from "../../actions/merchants/merchantsActions"

import { getMerchant } from "../../../services/dataService"

import { MerchantsTypes } from "../../types/merchantsTypes"

import { MerchantGetSelectedRequestAction } from "../../actions/merchants/__types/IActions"

export function* merchantGetSelectedSaga(action: MerchantGetSelectedRequestAction) {
	try {
		const existingMerchants: ReadonlyArray<IMerchant> = yield select(
			({ merchants }: IRootState) => merchants.merchants
		)

		let merchant = existingMerchants.find((m: IMerchant) => m.id === action.payload)

		if (!merchant) {
			const response = yield call(getMerchant, action.payload)

			merchant = response.data
		}

		yield put(merchantGetSelectedSuccess({ merchant }))
	} catch (err) {
		yield put(merchantGetSelectedError(err))
	}
}

export function* merchantGetSelectedSagaWatcher() {
	yield takeLatest(MerchantsTypes.MERCHANTS_GET_SELECTED_REQUEST, merchantGetSelectedSaga)
}
