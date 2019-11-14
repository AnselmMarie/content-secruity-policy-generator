/* Config */
import { CSP_CONTENT } from '../../configs/constants/content.constants';

/**
 * @property objectState
 * @desc Init object data
 */
const objectState = {
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
    }
  ],
  customData: ['']
};

export default objectState;
