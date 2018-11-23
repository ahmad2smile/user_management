import { call, takeLatest, put, select } from "redux-saga/effects"

import { merchantsUpdateSuccess, merchantsUpdateError } from "../../actions/merchants/merchantsActions"
import { alertOpen } from "../../actions/alert/alertActions"

import { updateMerchant } from "../../../services/dataService"

import { MerchantsTypes } from "../../types/merchantsTypes"

import { MerchantsUpdateAction } from "../../actions/merchants/__types/IActions"

export function* merchantsUpdateSaga(action: MerchantsUpdateAction) {
	try {
		const token: string = yield select(({ auth }: IRootState) => auth.authToken)

		yield call(updateMerchant, { merchant: action.payload, token })

		yield put(merchantsUpdateSuccess())

		yield put(
			alertOpen({
				message: "Merchants updated successfully!"
			})
		)
	} catch (err) {
		yield put(merchantsUpdateError(err))

		yield put(
			alertOpen({
				message: "Unable to update merchant!"
			})
		)
	}
}

export function* merchantsUpdateSagaWatcher() {
	yield takeLatest(MerchantsTypes.MERCHANTS_UPDATE_REQUEST, merchantsUpdateSaga)
}
