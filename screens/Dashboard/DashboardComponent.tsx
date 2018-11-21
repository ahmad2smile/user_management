import * as React from "react"
import useSheet from "react-jss"

import Merchants from "./Merchants/Merchants"

import { IProps } from "./__types/IProps"

import styles from "./styles"

const DashboardComponent = ({ classes }: IProps) => {
	return (
		<div className={classes.container}>
			<h1>Dashboard Page</h1>
			<div>
				<Merchants />
			</div>
		</div>
	)
}

export default useSheet(styles)(DashboardComponent)
