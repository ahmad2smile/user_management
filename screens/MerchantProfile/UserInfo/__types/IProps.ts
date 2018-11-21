import { StyledComponentProps } from "react-jss"
import { DispatchProp } from "react-redux"
import { RouteComponentProps } from "react-router-dom"

export interface IProps
	extends StyledComponentProps,
		DispatchProp,
		RouteComponentProps<{ readonly id: string }>,
		Partial<IMerchants> {}
