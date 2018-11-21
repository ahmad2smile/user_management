import * as React from "react"
import injectSheet from "react-jss"
import { withRouter } from "react-router-dom"

import { IProps } from "./__types/IProps"

import { styles } from "./styles"

const MerchantProfileComponent = ({
	match: {
		params: { id }
	},
	classes
}: IProps) => (
	<div className={classes.container}>
		<div>Merchant</div>
		<div>{id}</div>
	</div>
)

export default withRouter(injectSheet(styles)(MerchantProfileComponent))
