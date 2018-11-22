import { StyledComponentProps } from "react-jss"

import { IRow } from "./IRow"
import { IHead } from "./IHead"

export interface IProps extends StyledComponentProps {
	readonly DefaultBtn?: React.SFC
	readonly handleSelectAllClick?: React.ChangeEventHandler
	readonly handleSelectClick?: (event: React.ChangeEvent, id: string) => void
	readonly onPageChange?: (page: number, rowsPerPage: number) => void
	readonly onRowsPerPageChange?: (page: number, rowsPerPage: number) => void
	readonly header: ReadonlyArray<IHead>
	readonly rows: ReadonlyArray<IRow>
	readonly rowsPerPage?: number
	readonly selected?: ReadonlyArray<string>
	readonly SelectedBtn?: React.SFC
	readonly tableTitle: string
	readonly count: number
}
