import * as React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import injectSheet from "react-jss"

import Table from "../../../components/Table/Table"
import SelectedBtn from "./SelectedBtn/SelectedBtn"

import { merchantsGetRequest } from "../../../appstate/actions/merchants/merchantsActions"

import { IProps } from "./__types/IProps"
import { IState } from "./__types/IState"

import { styles } from "./styles"

const header: ReadonlyArray<ITableHeader> = [
	{ id: "firstname", numeric: false, disablePadding: false, label: "Firstname" },
	{ id: "lastname", numeric: false, disablePadding: false, label: "Lastname" },
	{ id: "email", numeric: false, disablePadding: false, label: "Email" },
	{ id: "phone", numeric: false, disablePadding: false, label: "Phone" },
	{ id: "hasPremium", numeric: false, disablePadding: false, label: "Premium" }
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

	public componentDidMount() {
		const { dispatch } = this.props

		dispatch(merchantsGetRequest())
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

	public formatData(data: ReadonlyArray<IMerchant>) {
		return data.map(({ id, firstname, lastname, hasPremium, ...rest }) => ({
			...rest,
			id,
			firstname: {
				...firstname,
				component: <Link to={`merchants/${id.value}`}>{firstname.value}</Link>
			},
			lastname: {
				...lastname,
				component: <Link to={`merchants/${id.value}`}>{lastname.value}</Link>
			},
			hasPremium: {
				...hasPremium,
				component: <div>{hasPremium.value ? "Premium" : "Trial"}</div>
			}
		}))
	}

	public render() {
		const { merchants, classes } = this.props
		const { selected } = this.state

		return (
			<div className={classes.container}>
				<Table
					count={1000}
					tableTitle="Merchants"
					SelectedBtn={SelectedBtn}
					handleSelectClick={this.handleSelectClick}
					onPageChange={this.onPageChange}
					onRowsPerPageChange={this.onRowsPerPageChange}
					selected={selected}
					header={header}
					rows={this.formatData(merchants)}
				/>
			</div>
		)
	}
}

export default connect(({ merchants }: IRootState) => ({
	merchants: merchants.merchants
}))(injectSheet(styles)(Merchants))
