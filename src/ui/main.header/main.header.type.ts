/* Store */
import {
  ICspFtn_AC,
  ICspState,
} from '../../store/csp/csp.type';
import {
  ILoaderFtn_AC,
} from '../../store/loader/loader.type';
import { TGlobalCheckbox } from '../../configs/types/global.type';

export interface IMainHeaderProps extends Partial<ICspFtn_AC>, Partial<ILoaderFtn_AC> {
  cspData: ICspState;
}

export type IMainHeaderState = {
  importCompleted: boolean;
  inputData: string;
  reImportCheckbox: {
    label: string;
    checked: boolean;
    name: string;
  },
  errorMessage: {
    show: boolean;
    message: string;
  },
  successMessage: {
    show: boolean;
    message: string;
  },
}

export type TReduxState = {
  cspData: ICspState;
}

export type TCurrentSrc = {
  src: string;
  data: TGlobalCheckbox[];
}
