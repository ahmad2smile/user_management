import { call, takeLatest, put } from "redux-saga/effects"

import { merchantsGetSuccess, merchantsGetError } from "../../actions/merchants/merchantsActions"

import { getMerchants } from "../../../services/dataService"

import { MerchantsTypes } from "../../types/merchantsTypes"

import { MerchantsGetAction } from "../../actions/merchants/__types/IActions"

export function* merchantsGetSaga(_action: MerchantsGetAction) {
	try {
		const response = yield call(getMerchants)

		const merchants: ReadonlyArray<IMerchant> = response.data.map((d: { readonly [k: string]: string }) => {
			// tslint:disable-next-line:readonly-keyword
			const formatedData: { [k: string]: ITableData | string } = {}

			Object.keys(d).forEach((k: string) => {
				// tslint:disable-next-line:no-object-mutation
				formatedData[k] = k === "bids" ? d[k] : { value: d[k], component: d[k] }
			})

			return formatedData
		})

		yield put(merchantsGetSuccess({ merchants }))
	} catch (err) {
		yield put(merchantsGetError(err))
	}
}

export function* merchantsGetSagaWatcher() {
	yield takeLatest(MerchantsTypes.MERCHANTS_GET_REQUEST, merchantsGetSaga)
}
