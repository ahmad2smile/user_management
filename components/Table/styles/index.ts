import { Theme } from "@material-ui/core"
import { StyleRules } from "@material-ui/core/styles"

import { TableValues } from "../__types/TableValues"

export default (theme: Theme): StyleRules => ({
	root: {
		width    : "100%",
		marginTop: theme.spacing.unit * TableValues.marginTopMultiplier
	},
	table: {
		minWidth: 1020
	},
	tableWrapper: {
		overflowX: "auto"
	},
	title: {
		textAlign: "center"
	}
})
