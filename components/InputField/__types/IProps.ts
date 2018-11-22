import { StyledComponentProps } from "react-jss"
import { WrappedFieldProps, BaseFieldProps } from "redux-form"

import { InputTypes } from "../../../utils/models/InputTypes"

export interface IProps extends StyledComponentProps, WrappedFieldProps, BaseFieldProps<IProps> {
	readonly checked?: boolean
	readonly name: string
	readonly inputType?: InputTypes
}
