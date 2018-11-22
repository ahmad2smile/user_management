import * as React from "react"
import injectSheet from "react-jss"

import UserProfile from "../../../../components/UserProfile/UserProfile"

import { IProps } from "./__types/IProps"

import { styles } from "./styles/"

const DeleteList = ({ selected, classes }: IProps) => (
	<div className={classes.container}>
		<div>Are you sure you want to delete following merchants?</div>
		<div className={classes.list}>
			{selected.map((m: IMerchant) => (
				<UserProfile
					avatarUrl={m.avatarUrl}
					firstname={m.firstname}
					lastname={m.lastname}
					email={m.email}
					phone={m.phone}
					hasPremium={m.hasPremium}
				/>
			))}
		</div>
	</div>
)

export default injectSheet(styles)(DeleteList)
