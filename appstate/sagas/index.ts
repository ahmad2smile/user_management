import { all } from "redux-saga/effects"

import { merchantsGetSagaWatcher } from "./merchants/merchantsGetSaga"
import { merchantsDeleteSagaWatcher } from "./merchants/merchantsDeleteSaga"

export default function* rootSaga() {
	yield all([merchantsGetSagaWatcher(), merchantsDeleteSagaWatcher()])
}
