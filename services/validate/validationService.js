import { email, username, forgotemail, password } from "./authValidators"
import { newMessage, message, subject } from "./chatValidators"
import { name, description } from "./skillValidators"

const validators = {
	description,
	email,
	forgotemail,
	message,
	name,
	newMessage,
	password,
	subject,
	username
}

export function validate (values) {
	const errors = {}

	Object.keys(values).forEach(key => {
		validators[key] && (errors[key] = validators[key](values[key]))
	})

	return errors
}
