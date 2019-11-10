import { ICspFtn_AC } from '../../store/csp/csp.type';

export interface ICustomUrlProps extends Partial<ICspFtn_AC> {
  customData: string[],
  type: string,
}

