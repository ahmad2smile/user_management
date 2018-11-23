import * as React from "react"
import { connect } from "react-redux"
import { reduxForm, Field } from "redux-form"

import Button from "../../../components/Button/Button"
import InputField from "../../../components/InputField/InputField"
import ApiSuspense from "../../../components/ApiSuspense/ApiSuspense"

import { loginRequest, loginStateReset } from "../../../appstate/actions/auth/authActions"

import { validate } from "../../../services/validate/validationService"

import { IProps } from "./__types/IProps"
import { IState } from "./__types/IState"
import { IForm } from "./__types/IForm"

import { API } from "../../../__typings__/api"

class LoginForm extends React.Component<IProps, IState> {
	public constructor(props: IProps) {
		super(props)

		this.state = {
			didFormInitialized: false
		}

		this.submitHandler = this.submitHandler.bind(this)
	}

	public componentDidMount() {
		const { initialize } = this.props

		initialize({
			email: "",
			password: ""
		})
	}

	private submitHandler(values: IForm) {
		const { dispatch } = this.props

		dispatch(loginRequest(values))
	}

	public componentWillUnmount() {
		const { dispatch } = this.props

		dispatch(loginStateReset())
	}

	public render() {
		const { handleSubmit, loginRequestState, valid, pristine } = this.props

		return (
			<form onSubmit={handleSubmit(this.submitHandler)}>
				<div>
					<div>
						<label htmlFor="email">Email</label>
					</div>
					<Field
						component={InputField}
						name="email"
						placeholder="Enter your email"
						type="email"
						autoComplete="email"
						id="email"
					/>
				</div>
				<div>
					<div>
						<label htmlFor="password">Password</label>
					</div>
					<Field
						component={InputField}
						name="password"
						placeholder="Enter your password"
						type="password"
						autoComplete="current-password"
						id="password"
					/>
				</div>
				<div>
					<Button type="submit" disabled={!valid || pristine || loginRequestState === API.REQUEST_PENDING}>
						<ApiSuspense apiState={loginRequestState}>
							<div>Login</div>
						</ApiSuspense>
					</Button>
				</div>
			</form>
		)
	}
}

export default connect(({ auth }: IRootState) => ({
	loginRequestState: auth.loginRequestState
}))(reduxForm<IForm, Pick<IProps, "dispatch">>({ form: "login", validate })(LoginForm))
