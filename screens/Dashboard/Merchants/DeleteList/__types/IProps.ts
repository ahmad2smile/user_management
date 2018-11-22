import { StyledComponentProps } from "react-jss"

export interface IProps extends StyledComponentProps {
	readonly selected: ReadonlyArray<IMerchant>
	readonly deleteHandler: (event: React.MouseEvent) => void
	readonly closeHandler: (event: React.MouseEvent) => void
}
