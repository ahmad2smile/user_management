import * as React from "react"
import useSheet from "react-jss"

import Merchants from "./Merchants/Merchants"

import { IProps } from "./__types/IProps"

import { styles } from "./styles"

const DashboardComponent = ({ classes }: IProps) => (
	<div className={classes.container}>
		<h2>Dashboard</h2>
		<div>
			<Merchants />
		</div>
	</div>
)

export default useSheet(styles)(DashboardComponent)
