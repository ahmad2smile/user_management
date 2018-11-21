import { WithStyles } from "@material-ui/core"

import { IRow } from "./IRow"
import { IHead } from "./IHead"

import styles from "../styles/"

export interface IProps<TRow extends IRow, THead extends IHead> extends WithStyles<typeof styles> {
	readonly DefaultBtn: React.SFC
	readonly handleSelectAllClick?: React.ChangeEventHandler
	readonly handleSelectClick?: React.ChangeEventHandler
	readonly onPageChange?: (page: number, rowsPerPage: number) => void
	readonly onRowsPerPageChange?: (page: number, rowsPerPage: number) => void
	readonly header: ReadonlyArray<THead>
	readonly rows: ReadonlyArray<TRow>
	readonly rowsPerPage: number
	readonly selected: ReadonlyArray<number>
	readonly SelectedBtn: React.SFC
	readonly tableTitle: string
	readonly count: number
}
