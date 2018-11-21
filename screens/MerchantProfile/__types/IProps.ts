import { StyledComponentProps } from "react-jss"
import { RouteComponentProps } from "react-router-dom"

export interface IProps extends StyledComponentProps, RouteComponentProps<{ readonly id: string }> {}
