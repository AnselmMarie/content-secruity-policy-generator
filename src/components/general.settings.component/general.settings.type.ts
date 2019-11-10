import { ICspFtn_AC } from '../../store/csp/csp.type';

export interface IGeneralSettingsProps extends Partial<ICspFtn_AC> {
  generalData: string[],
  type: string,
}
