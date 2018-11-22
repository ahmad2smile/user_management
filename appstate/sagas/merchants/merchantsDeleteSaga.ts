import { call, takeLatest, put, select } from "redux-saga/effects"

import {
	merchantsGetRequest,
	merchantsDeleteSuccess,
	merchantsDeleteError
} from "../../actions/merchants/merchantsActions"

import { deleteMerchant } from "../../../services/dataService"

import { MerchantsTypes } from "../../types/merchantsTypes"

import { MerchantsDeleteAction } from "../../actions/merchants/__types/IActions"

export function* merchantsDeleteSaga(action: MerchantsDeleteAction) {
	try {
		const token: string = yield select(({ auth }: IRootState) => auth.authToken)

		const response = yield call(deleteMerchant, { id: action.payload.id, token })

		console.log("====================================")
		console.log(response)
		console.log("====================================")

		yield put(merchantsDeleteSuccess())

		yield put(merchantsGetRequest({}))
	} catch (err) {
		yield put(merchantsDeleteError(err))
	}
}

export function* merchantsDeleteSagaWatcher() {
	yield takeLatest(MerchantsTypes.MERCHANTS_DELETE_REQUEST, merchantsDeleteSaga)
}
