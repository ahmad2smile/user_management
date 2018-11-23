import * as React from "react"
import injectSheet from "react-jss"

import LoginForm from "./LoginForm/LoginForm"

import { IProps } from "./__types/IProps"

import { styles } from "./styles"

const MerchantEditComponent = ({ classes }: IProps) => (
	<div className={classes.container}>
		<h3>Login: </h3>
		<LoginForm />
	</div>
)

export default injectSheet(styles)(MerchantEditComponent)
