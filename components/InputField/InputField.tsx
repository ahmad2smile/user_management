import React from "react"
import useSheet from "react-jss"
// @ts-ignore
import { CheckboxSelect } from "@atlaskit/select"

import Switch from "./Switch/Switch"
import Checkbox from "./Checkbox/Checkbox"

import { styles, selectStyles } from "./styles"

import { IProps } from "./__types/IProps"

const InputField = ({ input: { onBlur, ...restInput }, inputType, meta: { error }, classes, ...rest }: IProps) => {
	switch (inputType) {
		case "select":
			return (
				<CheckboxSelect
					onBlur={onBlur}
					styles={selectStyles}
					{...restInput}
					{...rest}
					invalidMessage={error}
					className="checkbox-select"
					classNamePrefix="select"
				/>
			)
		case "textarea":
			return <textarea onBlur={onBlur} {...restInput} {...rest} className={classes.textarea} />
		case "switch":
			return <Switch onBlur={onBlur} {...restInput} {...rest} />
		case "checkbox":
			return <Checkbox onBlur={onBlur} {...restInput} {...rest} />
		default:
			return <input onBlur={onBlur} {...restInput} {...rest} className={classes.input} />
	}
}

// tslint:disable-next-line:no-object-mutation
InputField.defaultProps = {
	// tslint:disable-next-line:no-empty
	input: { onBlur: () => {}, onChange: () => {} },
	meta: {
		touched: false,
		error: "",
		warning: ""
	}
}

export default useSheet(styles)(InputField)
