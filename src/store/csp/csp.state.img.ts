/* Config */
import { CSP_CONTENT } from '../../configs/constants/content.constants';

/**
 * @property imgState
 * @desc Init img data
 */
const imgState = {
  generalData: [
    {
      name: CSP_CONTENT.NONE,
      val: CSP_CONTENT.NONE_VAL,
      checked: false,
    },
    {
      name: CSP_CONTENT.SELF,
      val: CSP_CONTENT.SELF_VAL,
      checked: false,
    },
    {
      name: CSP_CONTENT.WILDCARD,
      val: CSP_CONTENT.WILDCARD_VAL,
      checked: false,
    },
    {
      name: CSP_CONTENT.DATA,
      val: CSP_CONTENT.DATA_VAL,
      checked: false,
    }
  ],
  customData: ['']
};

export default imgState;
