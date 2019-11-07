/* Configs */
import cspConst from '../../../configs/constants/csp.name.constants';

/**
 * @property frameState
 * @desc Init frame data
 * @author Anselm Marie
 */
const frameState = {
  generalData: [
    {
      name: cspConst.NONE,
      val: cspConst.NONE_VAL,
      checked: false,
    },
    {
      name: cspConst.SELF,
      val: cspConst.SELF_VAL,
      checked: false,
    },
    {
      name: cspConst.WILDCARD,
      val: cspConst.WILDCARD_VAL,
      checked: false,
    },
    {
      name: cspConst.DATA,
      val: cspConst.DATA_VAL,
      checked: false,
    },
    {
      name: cspConst.UNSAFE_EVAL,
      val: cspConst.UNSAFE_EVAL_VAL,
      checked: false,
    },
    {
      name: cspConst.UNSAFE_HASHES,
      val: cspConst.UNSAFE_HASHES_VAL,
      checked: false,
    },
    {
      name: cspConst.UNSAFE_INLINE,
      val: cspConst.UNSAFE_INLINE_VAL,
      checked: false,
    }
  ],
  customData: ['']
};

export default frameState;
