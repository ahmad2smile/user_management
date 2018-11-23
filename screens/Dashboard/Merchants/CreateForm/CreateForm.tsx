import * as React from "react"
import { connect } from "react-redux"
import { reduxForm } from "redux-form"

import MerchantForm from "../../../../components/MerchantForm/MerchantForm"

import { merchantsCreateRequest } from "../../../../appstate/actions/merchants/merchantsActions"

import { validate } from "../../../../services/validate/validationService"

import { MD5 } from "../../../../utils/md5Generator"

import { IProps } from "./__types/IProps"
import { IForm } from "./__types/IForm"

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
		const { handleSubmit, merchantsCreateState, valid, pristine } = this.props

		return (
			<MerchantForm
				buttonText="Create"
				handleSubmit={handleSubmit(this.submitHandler)}
				valid={valid}
				pristine={pristine}
				formState={merchantsCreateState}
			/>
		)
	}
}

export default connect(({ merchants }: IRootState) => ({
	merchantsCreateState: merchants.merchantsCreateState
}))(reduxForm<IForm, Pick<IProps, "dispatch">>({ form: "merchantCreate", validate })(CreateForm))
