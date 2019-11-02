/* Configs */
import cspConst from '../../../configs/constants/csp.name.constants';

/**
 * @property scriptState
 * @desc Init script data
 * @author Anselm Marie
 */
const scriptState  = {
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

export default scriptState;
