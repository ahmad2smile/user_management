interface IRootState {
	readonly merchants: IMerchants
	readonly auth: IAuth
}

interface IMerchants {
	readonly merchants: ReadonlyArray<IMerchant>
	readonly merchantsCount: number
	readonly selectedMerchant: Partial<IMerchant>
	readonly merchantsGetState: API
	readonly merchantsGetError: string
	readonly merchantsDeleteState: API
	readonly merchantsDeleteError: string
	readonly merchantsCreateState: API
	readonly merchantsCreateError: string
}

interface IMerchant {
	readonly id: string
	readonly firstname: string
	readonly lastname: string
	readonly avatarUrl: string
	readonly email: string
	readonly phone: string
	readonly hasPremium: boolean
	readonly bids: ReadonlyArray<IBid>
	readonly [key: string]: boolean | string | number
}

interface ITableData {
	readonly component: React.ReactNode
	readonly value: number | string | boolean
}

interface IBid {
	readonly id: string
	readonly carTitle: string
	readonly amount: number
	readonly created: string
	readonly [k: string]: string | number
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

interface ITableHeader {
	readonly id: string
	readonly numeric: boolean
	readonly disablePadding: boolean
	readonly label: string
}

/* ------------------------------------------------- */
// Actions Types
/* ------------------------------------------------- */
interface IAction<P, T> {
	readonly payload?: P
	readonly type: T
}

/* ------------------------------------------------- */
// API dup cause can't import in global.d.ts
/* ------------------------------------------------- */
enum API {
	NOT_REQUESTED = "API_NOT_REQUESTED",
	REQUEST_PENDING = "API_REQUEST_PENDING",
	REQUEST_SUCCESS = "API_REQUEST_SUCCESS",
	REQUEST_ERROR = "API_REQUEST_ERROR"
}
