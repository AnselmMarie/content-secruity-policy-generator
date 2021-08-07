/* Store */
import {
  ICspFtn_AC,
} from '../../store/csp/csp.type';
/* Config */
import { TGlobalCheckbox } from '../../configs/types/global.type';

export interface IGeneralSettingsProps extends Partial<ICspFtn_AC>{
  generalData: TGlobalCheckbox[],
  type: string,
}
