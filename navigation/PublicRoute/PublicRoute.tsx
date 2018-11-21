import * as React from "react"
import { Route, Redirect } from "react-router-dom"

import { IProps } from "./__types/IProps"

const PublicRoute = ({ isUnAuth, component: Component, ...rest }: IProps) => (
	<Route
		render={
			// tslint:disable-next-line:jsx-no-lambda
			({ location }) =>
				isUnAuth ? (
					<Component />
				) : (
					<Redirect
						to={{
							pathname: "/",
							state: { from: location }
						}}
					/>
				)
			// tslint:disable-next-line:jsx-curly-spacing
		}
		{...rest}
	/>
)

export default PublicRoute
