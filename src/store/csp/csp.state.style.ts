/* Config */
import { CSP_CONTENT } from '../../configs/constants/content.constants';

/**
 * @property styleState
 * @desc Init style data
 */
const styleState = {
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
    },
    {
      name: CSP_CONTENT.UNSAFE_HASHES,
      val: CSP_CONTENT.UNSAFE_HASHES_VAL,
      checked: false,
    },
    {
      name: CSP_CONTENT.UNSAFE_INLINE,
      val: CSP_CONTENT.UNSAFE_INLINE_VAL,
      checked: false,
    }
  ],
  customData: ['']
};

export default styleState;
