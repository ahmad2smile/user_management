import * as React from "react"
import injectSheet from "react-jss"

import Plus from "../../../../components/Icons/Plus"

import { IProps } from "./__types/IProps"

import { styles } from "./styles/"

const DefaultBtn = ({ handler, classes }: IProps) => (
	<div onClick={handler} className={classes.container}>
		<Plus />
	</div>
)

export default React.memo(injectSheet(styles)(DefaultBtn))
