/* Node Module */
import { RouteComponentProps } from 'react-router-dom';
/* Store */
import {
  ICspState,
  ICspFtn_AC,
} from '../../store/csp/csp.type';

export interface IStyleRouteProps extends RouteComponentProps, Partial<ICspFtn_AC>, Partial<ICspState> {
  el: string,
  inputName: string,
  i: number,
  checked: boolean,
}


// Type '{ type: string; addEmptyUrl_AC: (type: string) => void; 
//   modifyUrl_AC: (type: string, data: IUrlData_AC) => void; 
//   deleteUrl_AC: (type: string, data: IUrlData_AC) => void; 
//   customData: string[]; }' is missing the following properties from type 'ICustomUrlProps': 
//   el, inputName, i, checkedts(2739)
