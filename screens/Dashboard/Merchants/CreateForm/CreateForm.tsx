import * as React from "react"
import { connect } from "react-redux"
import { Field, reduxForm } from "redux-form"

import injectSheet from "react-jss"

import InputField from "../../../../components/InputField/InputField"
import Button from "../../../../components/Button/Button"
import ApiSuspense from "../../../../components/ApiSuspense/ApiSuspense"

import { merchantsCreateRequest } from "../../../../appstate/actions/merchants/merchantsActions"

import { validate } from "../../../../services/validate/validationService"

import { MD5 } from "../../../../utils/md5Generator"

import { IProps } from "./__types/IProps"
import { IForm } from "./__types/IForm"
import { InputTypes } from "../../../../utils/models/InputTypes"
import { API } from "../../../../__typings__/api"

import { styles } from "./styles"

class CreateForm extends React.Component<IProps> {
	public constructor(props: IProps) {
		super(props)

		this.submitHandler = this.submitHandler.bind(this)
	}

	public componentDidMount() {
		this.props.initialize({
			firstname: "",
			lastname: "",
			email: "",
			phone: "",
			hasPremium: false
		})
	}

	private submitHandler(values: IForm) {
		const { dispatch } = this.props
		const { firstname, lastname, email, phone, hasPremium } = values

		const payload: IMerchant = {
			// Cause mocked server can't generate this
			// Otherwise Server would generate it
			id: MD5(firstname + lastname + email),
			firstname,
			lastname,
			email,
			phone,
			avatarUrl: "",
			hasPremium,
			bids: [
				{
					id: "",
					carTitle: "",
					amount: 0,
					created: ""
				}
			]
		}

		dispatch(merchantsCreateRequest(payload))
	}

	public render() {
		const { handleSubmit, merchantsCreateState, valid, pristine, classes } = this.props

		return (
			<div className={classes.container}>
				<form onSubmit={handleSubmit(this.submitHandler)}>
					<div className={classes.inputField}>
						<div>
							<label htmlFor="firstname">Firstname</label>
						</div>
						<Field
							component={InputField}
							name="firstname"
							placeholder="Firstname"
							type="text"
							id="firstname"
						/>
					</div>
					<div className={classes.inputField}>
						<div>
							<label htmlFor="lastname">Lastname</label>
						</div>
						<Field
							component={InputField}
							name="lastname"
							placeholder="Lastname"
							type="text"
							id="lastname"
						/>
					</div>
					<div className={classes.inputField}>
						<div>
							<label htmlFor="email">Email</label>
						</div>
						<Field
							component={InputField}
							name="email"
							placeholder="your_email@mail.com"
							type="email"
							id="email"
						/>
					</div>
					<div className={classes.inputField}>
						<div>
							<label htmlFor="phone">Phone (optional)</label>
						</div>
						<Field component={InputField} name="phone" placeholder="Phone Number" type="tel" id="phone" />
					</div>
					<div className={classes.inputField}>
						<div>
							<label htmlFor="hasPremium">Premium</label>
						</div>
						<Field
							component={InputField}
							name="hasPremium"
							inputType={InputTypes.Switch}
							type="checkbox"
							id="hasPremium"
						/>
					</div>
					<div>
						<Button
							type="submit"
							disabled={!valid || pristine || merchantsCreateState === API.REQUEST_PENDING}
						>
							<ApiSuspense apiState={merchantsCreateState}>
								<div>Login</div>
							</ApiSuspense>
						</Button>
					</div>
				</form>
			</div>
		)
	}
}

export default connect(({ merchants }: IRootState) => ({
	merchantsCreateState: merchants.merchantsCreateState
}))(reduxForm<IForm, Pick<IProps, "dispatch">>({ form: "merchantCreate", validate })(injectSheet(styles)(CreateForm)))
