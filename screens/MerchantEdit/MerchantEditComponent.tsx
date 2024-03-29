import * as React from "react"
import injectSheet from "react-jss"

import EditForm from "./EditForm/UpdateForm"

import { IProps } from "./__types/IProps"

import { styles } from "./styles"

const MerchantEditComponent = ({ classes }: IProps) => (
	<div className={classes.container}>
		<EditForm />
	</div>
)

export default injectSheet(styles)(MerchantEditComponent)
