import { StyledComponentProps } from "react-jss"
import { DispatchProp } from "react-redux"
import { InjectedFormProps } from "redux-form"

import { IForm } from "./IForm"

export interface IProps
	extends StyledComponentProps,
		DispatchProp,
		InjectedFormProps<IForm, Pick<IProps, "dispatch">> {}
