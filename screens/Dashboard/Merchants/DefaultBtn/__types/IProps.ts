import { StyledComponentProps } from "react-jss"

export interface IProps extends StyledComponentProps {
	readonly handler: (event: React.MouseEvent) => void
}
