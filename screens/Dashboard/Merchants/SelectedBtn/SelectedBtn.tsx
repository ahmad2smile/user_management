import * as React from "react"
import { connect } from "react-redux"

import Trash from "../../../../components/Icons/Trash"

import { merchantsDrawerToggle } from "../../../../appstate/actions/merchants/merchantsActions"

import { Colors } from "../../../../theme"

import { IProps } from "./__types/IProps"

class SelectedBtn extends React.Component<IProps> {
	public constructor(props: IProps) {
		super(props)

		this.toggleDrawer = this.toggleDrawer.bind(this)
	}

	public toggleDrawer() {
		const { dispatch } = this.props

		dispatch(merchantsDrawerToggle())
	}

	public render() {
		return (
			<div
				onClick={this.toggleDrawer}
				style={{
					cursor: "pointer"
				}}
			>
				<Trash color={Colors.danger} fill={Colors.danger} />
			</div>
		)
	}
}

export default connect()(SelectedBtn)
