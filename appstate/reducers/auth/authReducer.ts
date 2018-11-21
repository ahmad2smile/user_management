import { AuthTypes } from "../../types/authTypes"

import { AuthActions, LoginSuccessAction, LoginErrorAction } from "../../actions/auth/__types/IActions"

import { API } from "../../../__typings__/api"

export const initialState: IAuth = {
	authToken: "SomeToken",
	user: {
		id: "",
		name: ""
	},
	loginRequest: API.NOT_REQUESTED,
	loginError: ""
}

export function authReducer(state: IAuth = initialState, action: AuthActions): IAuth {
	return (
		{
			[AuthTypes.LOGIN_REQUEST]: {
				...state,
				loginRequest: API.REQUEST_PENDING
			},
			[AuthTypes.LOGIN_REQUEST_SUCCESS]: {
				...state,
				...(action as LoginSuccessAction).payload,
				loginRequest: API.REQUEST_SUCCESS
			},
			[AuthTypes.LOGIN_REQUEST_ERROR]: {
				...state,
				loginError: (action as LoginErrorAction).payload,
				loginRequest: API.REQUEST_ERROR
			}
		}[action.type] || state
	)
}
