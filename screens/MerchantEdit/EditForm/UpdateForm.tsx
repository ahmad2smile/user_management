import * as React from "react"
import { connect } from "react-redux"
import { reduxForm } from "redux-form"
import { withRouter, Redirect } from "react-router-dom"

import MerchantForm from "../../../components/MerchantForm/MerchantForm"

import {
	merchantsUpdateRequest,
	merchantGetSelectedRequest,
	merchantsUpdateStateReset
} from "../../../appstate/actions/merchants/merchantsActions"

import { validate } from "../../../services/validate/validationService"

import { IProps } from "./__types/IProps"
import { IState } from "./__types/IState"
import { IForm } from "./__types/IForm"
import { API } from "../../../__typings__/api"

class UpdateForm extends React.Component<IProps, IState> {
	public constructor(props: IProps) {
		super(props)

		this.state = {
			didFormInitialized: false
		}

		this.submitHandler = this.submitHandler.bind(this)
	}

	public static getDerivedStateFromProps(props: IProps, state: IState) {
		const {
			selectedMerchant,
			initialize,
			match: {
				params: { id }
			}
		} = props
		const { didFormInitialized } = state

		if (selectedMerchant && !didFormInitialized && selectedMerchant.id === id) {
			const { firstname, lastname, email, phone, hasPremium } = selectedMerchant

			initialize({
				firstname,
				lastname,
				email,
				phone,
				hasPremium
			})

			return {
				didFormInitialized: true
			}
		}

		return null
	}

	public componentDidMount() {
		const {
			selectedMerchant,
			match: {
				params: { id }
			}
		} = this.props
		const { didFormInitialized } = this.state

		if (!selectedMerchant || !didFormInitialized || selectedMerchant.id !== id) {
			const { dispatch } = this.props

			dispatch(merchantGetSelectedRequest(id))
		}
	}

	private submitHandler(values: IForm) {
		const {
			dispatch,
			selectedMerchant: { id, avatarUrl, bids }
		} = this.props
		const { firstname, lastname, email, phone, hasPremium } = values

		const payload: IMerchant = {
			id,
			firstname,
			lastname,
			email,
			phone,
			avatarUrl,
			hasPremium,
			bids
		}

		dispatch(merchantsUpdateRequest(payload))
	}

	public componentWillUnmount() {
		const { dispatch } = this.props

		dispatch(merchantsUpdateStateReset())
	}

	public render() {
		const {
			handleSubmit,
			selectedMerchant: { id },
			merchantsUpdateState,
			valid,
			pristine
		} = this.props

		return merchantsUpdateState !== API.REQUEST_SUCCESS ? (
			<MerchantForm
				buttonText="Update"
				handleSubmit={handleSubmit(this.submitHandler)}
				valid={valid}
				pristine={pristine}
				formState={merchantsUpdateState}
			/>
		) : (
			<Redirect to={`/merchants/${id}`} />
		)
	}
}

export default connect(({ merchants }: IRootState) => ({
	selectedMerchant: merchants.selectedMerchant,
	merchantsUpdateState: merchants.merchantsUpdateState,
	merchantsGetSelectedState: merchants.merchantsGetSelectedState
}))(reduxForm<IForm, Pick<IProps, "dispatch">>({ form: "merchantEdit", validate })(withRouter(UpdateForm)))
