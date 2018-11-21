// tslint:disable:no-require-imports
// tslint:disable:no-implicit-dependencies

import { applyMiddleware, createStore, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import { persistStore } from "redux-persist"
// @ts-ignore
import Reactotron from "reactotron-react-js"
// @ts-ignore
import { reactotronRedux } from "reactotron-redux"
// @ts-ignore
import sagaPlugin from "reactotron-redux-saga"

import rootReducer from "../reducers"

import rootSaga from "../sagas"

let sagaMiddleware = createSagaMiddleware()

function configureStore() {
	if (process.env.NODE_ENV !== "production") {
		// To use Reactotron for devTools
		// Source: https://github.com/infinitered/reactotron
		const reactotron = Reactotron.configure()
			.use(sagaPlugin())
			.use(reactotronRedux())
			.connect()

		const sagaMonitor = reactotron.createSagaMonitor()

		sagaMiddleware = createSagaMiddleware({ sagaMonitor })

		// Imported as on Docs
		const immutabilityCheckMiddleware = require("redux-immutable-state-invariant").default()

		return reactotron.createStore(
			rootReducer,
			compose(applyMiddleware(sagaMiddleware, immutabilityCheckMiddleware))
		)
	}

	return createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)))
}

export const store = configureStore()

// Must initiate sagas after creating the store
sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store) // For redux persist PersistGate
