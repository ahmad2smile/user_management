import { DispatchProp } from "react-redux"
import { InjectedFormProps } from "redux-form"
import { RouteComponentProps } from "react-router"

import { IForm } from "./IForm"

export interface IProps
	extends DispatchProp,
		RouteComponentProps<{ readonly id: string }>,
		InjectedFormProps<IForm, Pick<IProps, "dispatch">>,
		Partial<IMerchants> {}
