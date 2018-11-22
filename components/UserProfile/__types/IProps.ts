import { StyledComponentProps } from "react-jss"

export interface IProps extends StyledComponentProps {
	readonly avatarUrl: string
	readonly firstname: string
	readonly lastname: string
	readonly email: string
	readonly phone: string
	readonly hasPremium: boolean
}
