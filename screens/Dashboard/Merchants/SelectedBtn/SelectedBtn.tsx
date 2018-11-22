import * as React from "react"

import Trash from "../../../../components/Icons/Trash"

import { Colors } from "../../../../theme"

import { IProps } from "./__types/IProps"

const SelectedBtn = ({ handler }: IProps) => (
	<div onClick={handler} style={{ cursor: "pointer" }}>
		<Trash color={Colors.danger} fill={Colors.danger} />
	</div>
)

export default React.memo(SelectedBtn)
