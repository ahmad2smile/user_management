import * as React from "react"
import { connect } from "react-redux"
import { withRouter, Link } from "react-router-dom"
import Paper from "@material-ui/core/Paper"

import UserProfile from "./../../../components/UserProfile/UserProfile"
import Table from "../../../components/Table/Table"

import { merchantGetSelectedRequest } from "../../../appstate/actions/merchants/merchantsActions"

import { IProps } from "./__types/IProps"

const header: ReadonlyArray<ITableHeader> = [
	{ id: "carTitle", numeric: false, disablePadding: false, label: "Car" },
	{ id: "amount", numeric: false, disablePadding: false, label: "Bid" },
	{ id: "created", numeric: false, disablePadding: false, label: "Date" }
]

class UserInfo extends React.Component<IProps> {
	public componentDidMount() {
		const {
			match: {
				params: { id }
			},
			dispatch
		} = this.props

		dispatch(merchantGetSelectedRequest(id))
	}

	public onPageChange(_page: number, _rowsPerPage: number) {}

	public onRowsPerPageChange(_page: number, _rowsPerPage: number) {}

	public formatData(data: ReadonlyArray<IBid>) {
		return data // tslint:disable-next-line:no-any
			.map((d: any) => {
				// tslint:disable-next-line:readonly-keyword
				const formatedData: { [k: string]: ITableData } = {}

				Object.keys(d).forEach((k: string) => {
					// tslint:disable-next-line:no-object-mutation
					formatedData[k] = k === "bids" ? d[k] : { value: d[k], component: d[k] }
				})

				return formatedData
			})
	}

	public render() {
		const {
			selectedMerchant: { id, avatarUrl, firstname, lastname, email, phone, hasPremium, bids }
		} = this.props

		return (
			<div>
				<Link to="/">Go Back</Link>
				<Link to={`/merchants/edit/${id}`}>Edit</Link>
				<Paper square={true}>
					<UserProfile
						avatarUrl={avatarUrl}
						firstname={firstname}
						lastname={lastname}
						email={email}
						phone={phone}
						hasPremium={hasPremium}
					/>
					<div>
						<Table
							count={bids.length}
							rowsPerPage={5}
							tableTitle="Bids"
							onPageChange={this.onPageChange}
							onRowsPerPageChange={this.onRowsPerPageChange}
							header={header}
							rows={this.formatData(bids)}
						/>
					</div>
				</Paper>
			</div>
		)
	}
}

export default connect(({ merchants }: IRootState) => ({
	selectedMerchant: merchants.selectedMerchant
}))(withRouter(UserInfo))
