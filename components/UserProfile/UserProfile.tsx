import * as React from "react"
import injectSheet from "react-jss"

import Avatar from "../Avatar/Avatar"

import { SizeValue, PresenceValue } from "../Avatar/__types/AvatarValues"

import { IProps } from "./__types/IProps"

import { styles } from "./styles/"

const UserProfile = ({ avatarUrl, firstname, lastname, email, phone, hasPremium, classes }: IProps) => (
	<div className={classes.profileContainer}>
		<Avatar photo={avatarUrl} size={SizeValue.xlarge} presence={PresenceValue.online} />
		<div>
			<div className={classes.upperContainer}>
				<div className={classes.name}>{`${firstname} ${lastname}`}</div>
				<div className={classes.position}>{hasPremium ? "Premium" : "Trial"}</div>
			</div>
			<div className={classes.lowerContainer}>
				{phone || "Cell: N/A,"} {email}
			</div>
		</div>
	</div>
)

export default injectSheet(styles)(UserProfile)
