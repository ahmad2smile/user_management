interface IRowValues {
	readonly value: number | string
	readonly component: JSX.Element
}

export interface IRow {
	readonly id: {
		// tslint:disable-next-line:type-literal-delimiter
		readonly value: number
		// tslint:disable-next-line:type-literal-delimiter
		readonly component: JSX.Element
	}
	readonly name: IRowValues
	readonly [key: string]: IRowValues
}
