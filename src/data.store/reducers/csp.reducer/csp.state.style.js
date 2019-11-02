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
      val: false,
    },
    {
      name: cspConst.NONE,
      val: false,
    },
    {
      name: cspConst.SELF,
      val: false,
    },
    {
      name: cspConst.DATA,
      val: false,
    },
    {
      name: cspConst.UNSAFE_INLINE,
      val: false,
    },
    {
      name: cspConst.UNSAFE_HASHES,
      val: false,
    },
    {
      name: cspConst.UNSAFE_EVAL,
      val: false,
    }
  ],
  customData: []
};

export default styleState;
