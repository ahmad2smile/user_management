import * as React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

import "./index.css"

// MUI Typography varient error: https://material-ui.com/style/typography/#migration-to-typography-v2
/* tslint:disable-next-line */
;(window as any).__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true

// tslint:disable-next-line:no-expression-statement
ReactDOM.render(<App />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// Unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

// tslint:disable-next-line:no-expression-statement
serviceWorker.unregister()
