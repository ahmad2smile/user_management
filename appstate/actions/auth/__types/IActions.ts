import { AuthTypes } from "../../../types/authTypes"

export type LoginAction = IAction<undefined, AuthTypes>

export interface ILoginSuccessPayload extends Pick<IAuth, "user" | "authToken"> {}
export type LoginSuccessAction = IAction<ILoginSuccessPayload, AuthTypes>

export type LoginErrorAction = IAction<string, AuthTypes>

export type AuthActions = LoginAction | LoginSuccessAction | LoginErrorAction
