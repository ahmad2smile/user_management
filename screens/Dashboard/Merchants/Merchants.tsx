import * as React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import injectSheet from "react-jss"
// @ts-ignore
import Drawer from "@atlaskit/drawer"

import Table from "../../../components/Table/Table"

import SelectedBtn from "./SelectedBtn/SelectedBtn"
import DefaultBtn from "./DefaultBtn/DefaultBtn"
import DeleteList from "./DeleteList/DeleteList"
import CreateForm from "./CreateForm/CreateForm"

import {
	merchantsGetRequest,
	merchantsDeleteRequest,
	merchantsDrawerToggle
} from "../../../appstate/actions/merchants/merchantsActions"

import { tableDataFormatter } from "./../../../utils/tableDataFormatter"

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
			selected: [],
			selectedIds: [],
			currentPage: 0,
			searchValue: ""
		}

		this.toggleDrawer = this.toggleDrawer.bind(this)
		this.onPageChange = this.onPageChange.bind(this)
		this.deleteHandler = this.deleteHandler.bind(this)
		this.handleSelectClick = this.handleSelectClick.bind(this)
		this.onRowsPerPageChange = this.onRowsPerPageChange.bind(this)
	}

	public componentDidMount() {
		const { dispatch } = this.props

		dispatch(merchantsGetRequest({}))
	}

	public handleSelectClick(_event: React.ChangeEvent, id: string) {
		const { merchants } = this.props
		const { selectedIds } = this.state

		const selectedIndex = selectedIds.indexOf(id)
		let newSelected: ReadonlyArray<string> = []

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selectedIds, id)
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selectedIds.slice(1))
		} else if (selectedIndex === selectedIds.length - 1) {
			newSelected = newSelected.concat(selectedIds.slice(0, -1))
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(selectedIds.slice(0, selectedIndex), selectedIds.slice(selectedIndex + 1))
		}

		this.setState({
			selected: newSelected.map((selectedId: string) => merchants.find((m: IMerchant) => m.id === selectedId)),
			selectedIds: [...newSelected]
		})
	}

	public onPageChange(nextPage: number, rowsPerPage: number) {
		const { merchants, dispatch } = this.props
		const { currentPage } = this.state

		this.setState({ selected: [], currentPage: nextPage })

		const onNextPage = nextPage > currentPage
		const nextOffset = nextPage * rowsPerPage

		const navOutOfRangeOfData = nextOffset >= merchants.length

		onNextPage &&
			navOutOfRangeOfData &&
			dispatch(
				merchantsGetRequest({
					offset: nextOffset,
					limit: rowsPerPage
				})
			)
	}

	public onRowsPerPageChange(_page: number, rowsPerPage: number) {
		const { dispatch } = this.props

		this.setState({ selected: [] })

		dispatch(
			merchantsGetRequest({
				offset: 0,
				limit: rowsPerPage
			})
		)
	}

	public deleteHandler() {
		const { dispatch } = this.props
		const { selectedIds } = this.state

		selectedIds.forEach((id: string) => {
			dispatch(merchantsDeleteRequest({ id }))
		})

		this.setState({
			selected: [],
			selectedIds: []
		})

		this.toggleDrawer()
	}

	public toggleDrawer() {
		const { dispatch } = this.props

		dispatch(merchantsDrawerToggle())
	}

	public formatData(data: ReadonlyArray<IMerchant>) {
		return data.map(tableDataFormatter).map(({ id, firstname, lastname, hasPremium, ...rest }) => ({
			...rest,
			id,
			firstname: {
				...(firstname as ITableData),
				component: <Link to={`merchants/${(id as ITableData).value}`}>{(firstname as ITableData).value}</Link>
			},
			lastname: {
				...(lastname as ITableData),
				component: <Link to={`merchants/${(id as ITableData).value}`}>{(lastname as ITableData).value}</Link>
			},
			hasPremium: {
				...(hasPremium as ITableData),
				component: <div>{(hasPremium as ITableData).value ? "Premium" : "Trial"}</div>
			}
		}))
	}

	public render() {
		const { merchants, merchantsCount, merchantsGetState, merchantsDrawerState, classes } = this.props
		const { selected, selectedIds } = this.state

		return (
			<div className={classes.container}>
				<Drawer onClose={this.toggleDrawer} isOpen={merchantsDrawerState} width="wide">
					{selectedIds.length ? (
						<DeleteList
							selected={selected}
							deleteHandler={this.deleteHandler}
							closeHandler={this.toggleDrawer}
						/>
					) : (
						<CreateForm />
					)}
				</Drawer>
				<Table
					count={merchantsCount}
					dataRequestState={merchantsGetState}
					tableTitle="Merchants"
					DefaultBtn={DefaultBtn}
					SelectedBtn={SelectedBtn}
					handleSelectClick={this.handleSelectClick}
					onPageChange={this.onPageChange}
					onRowsPerPageChange={this.onRowsPerPageChange}
					selected={selectedIds}
					header={header}
					rows={this.formatData(merchants)}
				/>
			</div>
		)
	}
}

export default connect(({ merchants }: IRootState) => ({
	merchants: merchants.merchants,
	merchantsGetState: merchants.merchantsGetState,
	merchantsDrawerState: merchants.merchantsDrawerState,
	merchantsCount: merchants.merchantsCount
}))(injectSheet(styles)(Merchants))
