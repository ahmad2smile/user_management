import { StyledComponentProps } from "react-jss"

export interface IProps extends StyledComponentProps {
	readonly selected: ReadonlyArray<IMerchant>
}
