import * as React from "react"
import { connect } from "react-redux"
import { Switch, BrowserRouter as Router, Route, Redirect } from "react-router-dom"

import AuthRoute from "./AuthRoute/AuthRoute"
import PublicRoute from "./PublicRoute/PublicRoute"

import Alert from "../components/Alert/Alert"
import Loader from "../components/Loader/Loader"

const LoginComponent = React.lazy(() => import("../screens/Login/LoginComponent"))
const DashboardComponent = React.lazy(() => import("../screens/Dashboard/DashboardComponent"))
const MerchantProfileComponent = React.lazy(() => import("../screens/MerchantProfile/MerchantProfileComponent"))
const MerchantEditComponent = React.lazy(() => import("../screens/MerchantEdit/MerchantEditComponent"))

import { IProps } from "./__types/IProps"

const DashboardRoute = () => <Route exact path="/" component={DashboardComponent} />

const MainRoute = ({ authToken }: IProps): JSX.Element => (
	<div>
		<Router>
			<React.Suspense fallback={<Loader />}>
				<Switch>
					<PublicRoute exact path="/login" isUnAuth={!authToken} component={LoginComponent} />
					<AuthRoute path="/" exact isAuth={!!authToken} component={DashboardRoute} />
					<Redirect from="/merchants" to="/" exact />
					<AuthRoute
						path="/merchants/edit/:id"
						exact
						isAuth={!!authToken}
						component={MerchantEditComponent}
					/>
					<AuthRoute path="/merchants/:id" exact isAuth={!!authToken} component={MerchantProfileComponent} />
				</Switch>
			</React.Suspense>
		</Router>
		<Alert />
	</div>
)

export default connect(({ auth }: IRootState) => ({
	authToken: auth.authToken
}))(MainRoute)
