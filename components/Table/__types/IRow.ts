export interface IRow {
	readonly id: ITableData
	readonly name: ITableData
	readonly [key: string]: ITableData
}
