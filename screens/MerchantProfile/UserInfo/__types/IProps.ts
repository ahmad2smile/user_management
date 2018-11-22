import { DispatchProp } from "react-redux"
import { RouteComponentProps } from "react-router-dom"

export interface IProps extends DispatchProp, RouteComponentProps<{ readonly id: string }>, Partial<IMerchants> {}
