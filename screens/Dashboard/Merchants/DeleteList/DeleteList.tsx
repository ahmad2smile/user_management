import * as React from "react"
import injectSheet from "react-jss"

import UserProfile from "../../../../components/UserProfile/UserProfile"
import Button from "../../../../components/Button/Button"

import { IProps } from "./__types/IProps"

import { styles } from "./styles/"
import { Colors } from "../../../../theme"
import ApiSuspense from "../../../../components/ApiSuspense/ApiSuspense"

const DeleteList = ({ selected, apiState, deleteHandler, closeHandler, classes }: IProps) => (
	<div className={classes.container}>
		<div>Are you sure you want to delete following merchants?</div>
		<div className={classes.list}>
			{selected.map((m: IMerchant) => (
				<UserProfile
					key={m.id}
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
			<ApiSuspense apiState={apiState}>
				<Button onClick={deleteHandler} color={Colors.danger}>
					Delete
				</Button>
			</ApiSuspense>
			<Button onClick={closeHandler}>Cancel</Button>
		</div>
	</div>
)

export default injectSheet(styles)(DeleteList)
