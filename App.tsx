import * as React from "react"
import useSheet from "react-jss"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import MainRoute from "./navigation/routes"

import { persistor, store } from "./appstate/store"

import styles from "./App.styles"

const onBeforeLift: Function = (): void => {
	// Anything that needs to be done before App ready (by redux-persist)
}

const App: React.SFC = (): JSX.Element => (
	<Provider store={store}>
		<PersistGate onBeforeLift={onBeforeLift} persistor={persistor}>
			<MainRoute />
		</PersistGate>
	</Provider>
)

export default useSheet<"App", typeof styles>(styles)(App)
