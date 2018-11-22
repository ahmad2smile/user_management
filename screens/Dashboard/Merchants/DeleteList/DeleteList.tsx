import * as React from "react"
import injectSheet from "react-jss"

import UserProfile from "../../../../components/UserProfile/UserProfile"
import Button from "../../../../components/Button/Button"

import { IProps } from "./__types/IProps"

import { styles } from "./styles/"
import { Colors } from "../../../../theme"

const DeleteList = ({ selected, deleteHandler, closeHandler, classes }: IProps) => (
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
		<div className={classes.controls}>
			<Button onClick={deleteHandler} backgroundColor={Colors.danger}>
				Delete
			</Button>
			<Button onClick={closeHandler}>Cancel</Button>
		</div>
	</div>
)

export default injectSheet(styles)(DeleteList)
