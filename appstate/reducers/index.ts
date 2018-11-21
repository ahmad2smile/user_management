import { persistCombineReducers } from "redux-persist"
import { reducer as formReducer } from "redux-form"
import storage from "redux-persist/lib/storage"

import { merchantsReducer as merchants } from "./merchants/merchantsReducer"
import { authReducer as auth } from "./auth/authReducer"

// Setup for Redux Persist
export default persistCombineReducers(
	{
		key: "root",
		storage,
		blacklist: ["form"]
	},
	{
		form: formReducer,
		merchants,
		auth
	}
)
