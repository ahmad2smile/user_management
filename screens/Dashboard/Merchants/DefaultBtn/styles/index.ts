import { Styles } from "react-jss"

import { Colors } from "../../../../../theme"

export const styles: Styles = {
	container: {
		height: 40,
		width: 40,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		boxShadow: "0px 1px 9px #aaa",
		cursor: "pointer",
		backgroundColor: Colors.secondaryDark,
		borderRadius: "50%"
	}
}
