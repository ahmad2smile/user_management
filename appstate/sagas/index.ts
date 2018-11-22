import { all } from "redux-saga/effects"

import { merchantsGetSagaWatcher } from "./merchants/merchantsGetSaga"
import { merchantsDeleteSagaWatcher } from "./merchants/merchantsDeleteSaga"
import { merchantsCreateSagaWatcher } from "./merchants/merchantsCreateSaga"

export default function* rootSaga() {
	yield all([merchantsGetSagaWatcher(), merchantsDeleteSagaWatcher(), merchantsCreateSagaWatcher()])
}
