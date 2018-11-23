import { persistCombineReducers } from "redux-persist"
import { reducer as formReducer } from "redux-form"
import storage from "redux-persist/lib/storage"

import { alertReducer as alert } from "./alert/alertReducer"
import { authReducer as auth } from "./auth/authReducer"
import { merchantsReducer as merchants } from "./merchants/merchantsReducer"

// Setup for Redux Persist
export default persistCombineReducers(
	{
		key: "root",
		storage,
		blacklist: ["alert", "form"]
	},
	{
		form: formReducer,
		alert,
		auth,
		merchants
	}
)
