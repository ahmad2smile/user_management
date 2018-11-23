import { all } from "redux-saga/effects"

import { merchantsGetSagaWatcher } from "./merchants/merchantsGetSaga"
import { merchantGetSelectedSagaWatcher } from "./merchants/merchantGetSelectedSaga"
import { merchantsDeleteSagaWatcher } from "./merchants/merchantsDeleteSaga"
import { merchantsCreateSagaWatcher } from "./merchants/merchantsCreateSaga"
import { merchantsUpdateSagaWatcher } from "./merchants/merchantsUpdateSaga"

import { loginRequestSagaWatcher } from "./auth/loginRequestSaga"

export default function* rootSaga() {
	yield all([
		loginRequestSagaWatcher(),
		merchantsGetSagaWatcher(),
		merchantGetSelectedSagaWatcher(),
		merchantsDeleteSagaWatcher(),
		merchantsCreateSagaWatcher(),
		merchantsUpdateSagaWatcher()
	])
}
