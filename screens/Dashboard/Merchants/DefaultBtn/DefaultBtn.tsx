import * as React from "react"
import { connect } from "react-redux"
import injectSheet from "react-jss"

import Plus from "../../../../components/Icons/Plus"
import InputField from "../../../../components/InputField/InputField"

import { merchantsDrawerToggle, merchantsGetRequest } from "../../../../appstate/actions/merchants/merchantsActions"

import { IProps } from "./__types/IProps"
import { IState } from "./__types/IState"

import { styles } from "./styles/"

class DefaultBtn extends React.Component<IProps, IState> {
	public constructor(props: IProps) {
		super(props)

		this.state = {
			searchValue: ""
		}

		this.toggleDrawer = this.toggleDrawer.bind(this)
		this.handleSearch = this.handleSearch.bind(this)
	}

	public toggleDrawer() {
		const { dispatch } = this.props

		dispatch(merchantsDrawerToggle())
	}

	public handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
		const { dispatch } = this.props
		const { value } = event.target

		this.setState({
			searchValue: value
		})

		dispatch(merchantsGetRequest({ filter: value }))
	}

	public render() {
		const { classes } = this.props
		const { searchValue } = this.state

		return (
			<div className={classes.container}>
				<div className={classes.input}>
					<InputField
						placeholder="Search"
						input={{
							onChange: this.handleSearch,
							value: searchValue
						}}
					/>
				</div>
				<div onClick={this.toggleDrawer} className={classes.addContainer}>
					<Plus />
				</div>
			</div>
		)
	}
}

export default connect(() => ({}))(injectSheet(styles)(DefaultBtn))
