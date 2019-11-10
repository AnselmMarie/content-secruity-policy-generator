// /* Node Module */
// import { RouteComponentProps } from 'react-router-dom';
// RouteComponentProps,
/* Store */
import {
  ICspFtn_AC,
  ICspState,
} from '../../store/csp/csp.type';

export interface IMainHeaderProps extends Partial<ICspFtn_AC> {
  cspData: ICspState,
}
//cspData, history, location, match
export type IMainHeaderState = {
  importCompleted: boolean,
  inputData: string,
  reImportCheckbox: {
    label: string,
    checked: boolean,
    name: string
  },
  errorMessage: {
    show: boolean,
    message: string,
  },
  successMessage: {
    show: boolean,
    message: string,
  },
}

export type TReduxState = {
  cspData: ICspState,
}

// Argument of type 'typeof MainHeaderContainer' is not assignable to parameter of type 'ComponentType<Matching<TReduxState & { modifyCheckbox_AC: (type: number, data: ICheckboxData_AC) => CspActionTypes; addUrl_AC: (type: number, data: IUrlData_AC) => CspActionTypes; resetData_AC: () => CspActionTypes; }, IMainHeaderProps>>'.
//   Type 'typeof MainHeaderContainer' is not assignable to type 'ComponentClass<Matching<TReduxState & { modifyCheckbox_AC: (type: number, data: ICheckboxData_AC) => CspActionTypes; addUrl_AC: (type: number, data: IUrlData_AC) => CspActionTypes; resetData_AC: () => CspActionTypes; }, IMainHeaderProps>, any>'.
//     Types of parameters 'props' and 'props' are incompatible.
//       Type 'Matching<TReduxState & { modifyCheckbox_AC: (type: number, data: ICheckboxData_AC) => CspActionTypes; addUrl_AC: (type: number, data: IUrlData_AC) => CspActionTypes; resetData_AC: () => CspActionTypes; }, IMainHeaderProps>' is not assignable to type 'Readonly<IMainHeaderProps>'.
//         Types of property 'addUrl_AC' are incompatible.
//           Type '(type: number, data: IUrlData_AC) => CspActionTypes' is not assignable to type '(type: string, data: IUrlData_AC) => void'.
//             Types of parameters 'type' and 'type' are incompatible.
//               Type 'string' is not assignable to type 'number'.ts(2345)

