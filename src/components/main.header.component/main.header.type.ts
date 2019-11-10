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
