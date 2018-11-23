import { StyledComponentProps } from "react-jss"

import { API } from "../../../../../__typings__/api"

export interface IProps extends StyledComponentProps {
	readonly selected: ReadonlyArray<IMerchant>
	readonly apiState: API
	readonly deleteHandler: (event: React.MouseEvent) => void
	readonly closeHandler: (event: React.MouseEvent) => void
}
