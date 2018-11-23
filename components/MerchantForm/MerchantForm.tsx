import * as React from "react"
import { Field } from "redux-form"

import Button from "../Button/Button"
import InputField from "../InputField/InputField"
import ApiSuspense from "../ApiSuspense/ApiSuspense"

import { IProps } from "./__types/IProps"

import { API } from "../../__typings__/api"

import { InputTypes } from "../../utils/models/InputTypes"

const MerchantForm = ({ handleSubmit, valid, pristine, formState, buttonText }: IProps) => (
	<form onSubmit={handleSubmit}>
		<div>
			<div>
				<label htmlFor="firstname">Firstname</label>
			</div>
			<Field component={InputField} name="firstname" placeholder="Firstname" type="text" id="firstname" />
		</div>
		<div>
			<div>
				<label htmlFor="lastname">Lastname</label>
			</div>
			<Field component={InputField} name="lastname" placeholder="Lastname" type="text" id="lastname" />
		</div>
		<div>
			<div>
				<label htmlFor="email">Email</label>
			</div>
			<Field component={InputField} name="email" placeholder="your_email@mail.com" type="email" id="email" />
		</div>
		<div>
			<div>
				<label htmlFor="phone">Phone (optional)</label>
			</div>
			<Field component={InputField} name="phone" placeholder="Phone Number" type="tel" id="phone" />
		</div>
		<div>
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
			<Button type="submit" disabled={!valid || pristine || formState === API.REQUEST_PENDING}>
				<ApiSuspense apiState={formState}>
					<div>{buttonText}</div>
				</ApiSuspense>
			</Button>
		</div>
	</form>
)

export default MerchantForm
