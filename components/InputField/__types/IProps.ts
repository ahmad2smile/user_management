import * as React from "react"
import { StyledComponentProps } from "react-jss"

import { InputTypes } from "../../../utils/models/InputTypes"

export interface IProps extends StyledComponentProps {
	readonly input?: {
		readonly onBlur?: (event: React.FocusEvent) => void
		readonly onChange?: (event: React.ChangeEvent) => void
	}
	readonly value?: string
	readonly checked?: boolean
	readonly inputType: InputTypes
	readonly meta?: {
		readonly touched: boolean
		readonly error: string
		readonly warning: string
	}
}
