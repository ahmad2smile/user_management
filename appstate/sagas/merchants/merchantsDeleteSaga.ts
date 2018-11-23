import { call, takeLatest, put, select } from "redux-saga/effects"

import {
	merchantsGetRequest,
	merchantsDeleteSuccess,
	merchantsDeleteError
} from "../../actions/merchants/merchantsActions"

import { deleteMerchant } from "../../../services/dataService"

import { MerchantsTypes } from "../../types/merchantsTypes"

import { MerchantsDeleteAction } from "../../actions/merchants/__types/IActions"
import { alertOpen } from "../../actions/alert/alertActions"

export function* merchantsDeleteSaga(action: MerchantsDeleteAction) {
	try {
		const token: string = yield select(({ auth }: IRootState) => auth.authToken)

		yield call(deleteMerchant, { id: action.payload.id, token })

		yield put(merchantsDeleteSuccess())

		yield put(merchantsGetRequest({}))
	} catch (err) {
		yield put(merchantsDeleteError(err))

		yield put(
			alertOpen({
				message: "Unable to delete selected merchants!"
			})
		)
	}
}

export function* merchantsDeleteSagaWatcher() {
	yield takeLatest(MerchantsTypes.MERCHANTS_DELETE_REQUEST, merchantsDeleteSaga)
}
