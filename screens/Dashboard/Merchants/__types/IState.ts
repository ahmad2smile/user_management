export interface IState {
	readonly selected: ReadonlyArray<IMerchant>
	readonly selectedIds: ReadonlyArray<string>
	readonly currentPage: number
}
