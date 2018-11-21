import * as React from "react"

import Trash from "../../../../components/Icons/Trash"

import { Colors } from "../../../../theme"

const SelectedBtn = () => (
	<div>
		<Trash color={Colors.danger} fill={Colors.danger} />
	</div>
)

export default SelectedBtn
