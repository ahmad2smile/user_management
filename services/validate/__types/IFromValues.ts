import { IForm as IMerchantsForm } from "../../../screens/Dashboard/Merchants/CreateForm/__types/IForm"

export interface IFormValues extends IMerchantsForm {
	readonly [key: string]: string | boolean
}
