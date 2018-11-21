import { Styles } from "react-jss"
import { Fonts, Colors } from "../../../../theme"

export const styles: Styles = {
	profileContainer: {
		display: "flex",
		padding: 15,
		background: `linear-gradient(to bottom,${Colors.profileBackground}  50%, transparent 50%)`
	},
	content: {},
	upperContainer: {
		height: "50%"
	},
	nameContainer: {},
	name: {
		fontSize: Fonts.size.h4,
		"font-weight": "bold"
	},
	position: {
		fontSize: Fonts.size.medium,
		"font-weight": "bold"
	},
	lowerContainer: {
		fontSize: Fonts.size.medium,
		textAlign: "right",
		paddingTop: 30
	},
	manager: {},
	contact: {},
	address: {}
}
