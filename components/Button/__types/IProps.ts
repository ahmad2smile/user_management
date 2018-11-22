import * as React from "react"
import { StyledComponentProps } from "react-jss"

export interface IProps extends StyledComponentProps {
	readonly children: React.ReactNode
	readonly onClick: (event: React.MouseEvent) => void
	readonly href?: string
	readonly padding?: string | number
	readonly backgroundColor?: string
	readonly width?: string | number
	readonly margin?: string | number
}
