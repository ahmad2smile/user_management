import { DispatchProp } from "react-redux"
import { StyledComponentProps } from "react-jss"

export interface IProps extends StyledComponentProps, DispatchProp, Partial<IMerchants> {}
