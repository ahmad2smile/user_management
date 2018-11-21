import * as React from "react"
import { connect } from "react-redux"
import { Switch, BrowserRouter as Router, Route } from "react-router-dom"

import AuthRoute from "./AuthRoute/AuthRoute"
import PublicRoute from "./PublicRoute/PublicRoute"

import Loader from "../components/Loader/Loader"

const DashboardComponent = React.lazy(() => import("../screens/Dashboard/DashboardComponent"))

import { IProps } from "./__types/IProps"

const LoginRoute = () => <div>WIP</div>
const DashboardRoute = () => <Route exact path="/" component={DashboardComponent} />

const MainRoute = ({ authToken }: IProps): JSX.Element => (
	<Router>
		<React.Suspense fallback={<Loader />}>
			<Switch>
				<PublicRoute exact path="/login" isUnAuth={!authToken} component={LoginRoute} />
				<AuthRoute path="/" isAuth={!!authToken} component={DashboardRoute} />
			</Switch>
		</React.Suspense>
	</Router>
)

export default connect(({ auth }: IRootState) => ({
	authToken: auth.authToken
}))(MainRoute)
