import * as React from "react"
import { connect } from "react-redux"
import useSheet from "react-jss"
import { withRouter } from "react-router-dom"
import Paper from "@material-ui/core/Paper"

import Avatar from "../../../components/Avatar/Avatar"
import Table from "../../../components/Table/Table"

import { merchantsGetSelected } from "../../../appstate/actions/merchants/merchantsActions"

import { IProps } from "./__types/IProps"
import { SizeValue, PresenceValue } from "../../../components/Avatar/__types/AvatarValues"

import { styles } from "./styles/"

const header: ReadonlyArray<ITableHeader> = [
	{ id: "carTitle", numeric: false, disablePadding: false, label: "Car" },
	{ id: "amount", numeric: false, disablePadding: false, label: "Bid" },
	{ id: "created", numeric: false, disablePadding: false, label: "Date" }
]

class UserInfo extends React.PureComponent<IProps> {
	public componentDidMount() {
		const {
			match: {
				params: { id }
			},
			dispatch
		} = this.props

		dispatch(merchantsGetSelected(id))
	}

	public onPageChange(_page: number, _rowsPerPage: number) {}

	public onRowsPerPageChange(_page: number, _rowsPerPage: number) {}

	public formatData(data: ReadonlyArray<IBid>) {
		return data // tslint:disable-next-line:no-any
			.map((d: any) => {
				// tslint:disable-next-line:readonly-keyword
				const formatedData: { [k: string]: ITableData | string } = {}

				Object.keys(d).forEach((k: string) => {
					// tslint:disable-next-line:no-object-mutation
					formatedData[k] = k === "bids" ? d[k] : { value: d[k], component: d[k] }
				})

				return formatedData
			})
	}

	public render() {
		const {
			selectedMerchant: { avatarUrl, firstname, lastname, email, phone, hasPremium, bids },
			classes
		} = this.props

		return (
			<Paper square={true} className={classes.root}>
				<div className={classes.profileContainer}>
					<Avatar photo={avatarUrl.value as string} size={SizeValue.xlarge} presence={PresenceValue.online} />
					<div className={classes.content}>
						<div className={classes.upperContainer}>
							<div className={classes.nameContainer}>
								<div className={classes.name}>{`${firstname.value} ${lastname.value}`}</div>
								<div className={classes.position}>{hasPremium.value ? "Premium" : "Trial"}</div>
							</div>
						</div>
						<div className={classes.lowerContainer}>
							<div className={classes.contact}>
								{phone.value || "Cell: N/A,"} {email.value}
							</div>
						</div>
					</div>
				</div>
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
		)
	}
}

export default connect(({ merchants }: IRootState) => ({
	selectedMerchant: merchants.selectedMerchant
}))(withRouter(useSheet(styles)(UserInfo)))
