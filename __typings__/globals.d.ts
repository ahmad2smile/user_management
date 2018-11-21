interface IRootState {
	readonly merchants: IMerchants
	readonly auth: IAuth
}

interface IMerchants {
	readonly merchants: ReadonlyArray<IMerchant>
	readonly merchantsGetRequest: string
	readonly merchantsGetError: string
}

interface IMerchant {
	readonly id: ITableData
	readonly name: ITableData
	readonly [key: string]: ITableData
}

interface ITableData {
	readonly component: React.ReactNode
	readonly value: number | string
}

interface IAuth {
	readonly user: IUser
	readonly authToken: string
	readonly loginRequest: string
	readonly loginError: string
}

interface IUser {
	readonly id: string
	readonly name: string
}

/* ------------------------------------------------- */
// Actions Types
/* ------------------------------------------------- */
interface IAction<P, T> {
	readonly payload?: P
	readonly type: T
}
