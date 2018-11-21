import * as React from "react"
import injectSheet from "react-jss"
import { Link } from "react-router-dom"

import UserInfo from "./UserInfo/UserInfo"

import { IProps } from "./__types/IProps"

import { styles } from "./styles"

const MerchantProfileComponent = ({ classes }: IProps) => (
	<div className={classes.container}>
		<Link to="/">Go Back</Link>
		<UserInfo />
	</div>
)

export default injectSheet(styles)(MerchantProfileComponent)
