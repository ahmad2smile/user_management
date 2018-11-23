import { IForm as IMerchantsForm } from "../../../screens/Dashboard/Merchants/CreateForm/__types/IForm"
import { IForm as ILoginForm } from "../../../screens/Login/LoginForm/__types/IForm"

export interface IFormValues extends IMerchantsForm, ILoginForm {
	readonly [key: string]: string | boolean
}
