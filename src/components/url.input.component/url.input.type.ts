import { ICspFtn_AC } from '../../store/csp/csp.type';

export interface IUrlInputProps extends Partial<ICspFtn_AC> {
  customData: string[],
  type: string,
  el: string,
  inputName: string,
  i: number,
}
