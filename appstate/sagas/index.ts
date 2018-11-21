import { all } from "redux-saga/effects"

import { merchantsGetSagaWatcher } from "./merchants/merchantsGetSaga"

export default function* rootSaga() {
	yield all([merchantsGetSagaWatcher()])
}
