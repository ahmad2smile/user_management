export interface IState {
	readonly selected: ReadonlyArray<IMerchant>
	readonly selectedIds: ReadonlyArray<string>
	readonly currentPage: number
	readonly drawerState: boolean
}
