import * as React from "react"
import { withStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import Paper from "@material-ui/core/Paper"

import Pagination from "./Pagination/Pagination"
import EnhancedTableHead from "./EnhancedTableHead/EnhancedTableHead"
import EnhancedToolbar from "./EnhancedToolbar/EnhancedToolbar"
import TableRows from "./TableRows/TableRows"

import { IProps } from "./__types/IProps"
import { IState } from "./__types/IState"
import { IRow } from "./__types/IRow"
import { IHead } from "./__types/IHead"
import { TableValues } from "./__types/TableValues"

import styles from "./styles"

class EnhancedTable<TRow extends IRow, THead extends IHead> extends React.Component<IProps<TRow, THead>, IState> {
	public readonly state: IState = {
		orderType  : "asc",
		orderBy    : "name" as string,
		page       : 0,
		rowsPerPage: this.props.rowsPerPage || TableValues.defaultRowsPerPage
	}

	public readonly handleRequestSort = (_event: MouseEvent, orderByUpdate: string): void => {
		const { orderBy, orderType } = this.state

		this.setState({
			orderType: orderBy === orderByUpdate && orderType === "desc" ? "asc" : "desc",
			orderBy  : orderByUpdate
		})
	}

	// Req by MUI for handler to be arrow
	public readonly handleChangePage = (_event: React.MouseEvent<HTMLButtonElement>, page: number): void => {
		const { onPageChange } = this.props
		const { rowsPerPage } = this.state

		onPageChange(page, rowsPerPage)

		this.setState({ page })
	}

	// Req by MUI for handler to be arrow
	public readonly handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
	): void => {
		const { onRowsPerPageChange } = this.props
		const { page } = this.state
		const rowsPerPage: number = Number(event.target.value)

		onRowsPerPageChange(page, rowsPerPage)

		this.setState({ rowsPerPage })
	}

	public render (): JSX.Element {
		const {
			rows,
			header,
			tableTitle,
			DefaultBtn,
			SelectedBtn,
			handleSelectAllClick,
			handleSelectClick,
			selected,
			count,
			classes
		} = this.props
		const { orderType, orderBy, rowsPerPage, page } = this.state

		return (
			<Paper square={true} className={classes.root}>
				<EnhancedToolbar
					DefaultBtn={DefaultBtn}
					SelectedBtn={SelectedBtn}
					tableTitle={tableTitle}
					numSelected={selected.length}
				/>
				<div className={classes.tableWrapper}>
					<Table className={classes.table} aria-labelledby="tableTitle">
						<EnhancedTableHead
							numSelected={selected.length}
							columns={header}
							orderType={orderType}
							orderBy={orderBy}
							handleSelectClick={handleSelectClick}
							onSelectAllClick={handleSelectAllClick}
							onRequestSort={this.handleRequestSort}
							rowCount={rows.length}
						/>
						<TableBody>
							<TableRows
								rows={rows}
								columns={header}
								handleSelectClick={handleSelectClick}
								orderType={orderType}
								orderBy={orderBy}
								page={page}
								rowsPerPage={rowsPerPage}
								selected={selected}
							/>
						</TableBody>
					</Table>
				</div>
				<Pagination
					component="div"
					count={count}
					rowsPerPage={rowsPerPage}
					currentPage={page}
					onChangePage={this.handleChangePage}
					onChangeRowsPerPage={this.handleChangeRowsPerPage}
				/>
			</Paper>
		)
	}
}

export default withStyles(styles)(EnhancedTable)
