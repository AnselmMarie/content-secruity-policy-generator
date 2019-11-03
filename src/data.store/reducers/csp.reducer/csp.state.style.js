/* Configs */
import cspConst from '../../../configs/constants/csp.name.constants';

/**
 * @property styleState
 * @desc Init style data
 * @author Anselm Marie
 */
const styleState  = {
  generalData: [
    {
      name: cspConst.WILDCARD,
      checked: false,
    },
    {
      name: cspConst.NONE,
      checked: false,
    },
    {
      name: cspConst.SELF,
      checked: false,
    },
    {
      name: cspConst.DATA,
      checked: false,
    },
    {
      name: cspConst.UNSAFE_INLINE,
      checked: false,
    },
    {
      name: cspConst.UNSAFE_HASHES,
      checked: false,
    },
    {
      name: cspConst.UNSAFE_EVAL,
      checked: false,
    }
  ],
  customData: ['']
};

export default styleState;
