import { SubmitHandler } from "redux-form"

import { API } from "../../../__typings__/api"

export interface IProps {
	readonly handleSubmit: SubmitHandler
	readonly valid: boolean
	readonly pristine: boolean
	readonly formState: API
	readonly buttonText: string
}
