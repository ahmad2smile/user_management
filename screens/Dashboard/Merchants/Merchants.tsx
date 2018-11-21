import * as React from "react"
import { connect } from "react-redux"

import Table from "../../../components/Table/Table"
import SelectedBtn from "./SelectedBtn/SelectedBtn"

import { IProps } from "./__types/IProps"
import { IState } from "./__types/IState"
import { ITableHeader } from "./__types/ITableHeader"
import { merchantsGetRequest } from "../../../appstate/actions/merchants/merchantsActions"

const header: ReadonlyArray<ITableHeader> = [
	{ id: "name", numeric: false, disablePadding: false, label: "Company Name" },
	{ id: "billing_type", numeric: false, disablePadding: false, label: "Billing Method" },
	{ id: "trialLength", numeric: true, disablePadding: false, label: "Trial Length" },
	{ id: "isTrial", numeric: true, disablePadding: false, label: "Is On Trial" },
	{ id: "isActive", numeric: true, disablePadding: false, label: "Active" }
]

class Merchants extends React.Component<IProps, IState> {
	public constructor(props: IProps) {
		super(props)

		this.state = {
			selected: []
		}

		this.onPageChange = this.onPageChange.bind(this)
		this.handleSelectClick = this.handleSelectClick.bind(this)
		this.onRowsPerPageChange = this.onRowsPerPageChange.bind(this)
	}

	public handleSelectClick(_event: React.ChangeEvent, id: number) {
		const { selected } = this.state
		const selectedIndex = selected.indexOf(id)
		let newSelected: ReadonlyArray<number> = []

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, id)
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1))
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1))
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1))
		}

		this.setState({ selected: newSelected })
	}

	public onPageChange(_page: number, _rowsPerPage: number) {
		const { dispatch } = this.props

		this.setState({ selected: [] })
		dispatch(merchantsGetRequest())
	}

	public onRowsPerPageChange(_page: number, _rowsPerPage: number) {
		const { dispatch } = this.props

		this.setState({ selected: [] })
		dispatch(merchantsGetRequest())
	}

	public render() {
		const { merchants } = this.props
		const { selected } = this.state

		return (
			<div>
				<Table
					count={10}
					tableTitle="Companies"
					SelectedBtn={SelectedBtn}
					handleSelectClick={this.handleSelectClick}
					onPageChange={this.onPageChange}
					onRowsPerPageChange={this.onRowsPerPageChange}
					selected={selected}
					header={header}
					rows={merchants}
				/>
			</div>
		)
	}
}

export default connect(({ merchants }: IRootState) => ({
	merchants: merchants.merchants
}))(Merchants)
