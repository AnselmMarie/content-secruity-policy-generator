import { ICspFtn_AC } from '../../store/csp/csp.type';

export interface ICustomUrlProps extends Partial<ICspFtn_AC> {
  customData: string[],
  el: string,
  inputName: string,
  type: string,
  i: number,
  checked: boolean,
}
