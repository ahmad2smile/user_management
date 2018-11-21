import { AuthTypes } from "../../types/authTypes"

import { LoginAction, LoginSuccessAction, LoginErrorAction, ILoginSuccessPayload } from "./__types/IActions"

export function merchantsGetRequest(): LoginAction {
	return {
		type: AuthTypes.LOGIN_REQUEST
	}
}

export function merchantsGetSuccess(payload: ILoginSuccessPayload): LoginSuccessAction {
	return {
		payload,
		type: AuthTypes.LOGIN_REQUEST_SUCCESS
	}
}

export function merchantsGetError(payload: string): LoginErrorAction {
	return {
		payload,
		type: AuthTypes.LOGIN_REQUEST_ERROR
	}
}
