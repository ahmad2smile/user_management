export function newMessage (value) {
	const formattedValue = value.replace(/<(?:.|\n)*?>/gm, "").trim()
	if (!formattedValue) {
		return "Message is required"
	}

	return ""
}

export function message (value) {
	if (!value) {
		return "Message is required"
	}

	return ""
}

export function subject (value) {
	if (!value) {
		return "Subject is required"
	}

	return ""
}
