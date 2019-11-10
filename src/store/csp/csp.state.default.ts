/* Config */
import cspConst from '../../configs/constants/csp.name.constants';
import { ICspNameConstants } from '../../configs/constants/csp.name.type';

/**
 * @property cspConstData
 * @desc csp constants content
 */
const cspConstData: ICspNameConstants = cspConst;

/**
 * @property defaultState
 * @desc Init default data
 */
const defaultState = {
  generalData: [
    {
      name: cspConstData.NONE,
      val: cspConstData.NONE_VAL,
      checked: false,
    },
    {
      name: cspConstData.SELF,
      val: cspConstData.SELF_VAL,
      checked: false,
    },
    {
      name: cspConstData.WILDCARD,
      val: cspConstData.WILDCARD_VAL,
      checked: false,
    },
    {
      name: cspConstData.DATA,
      val: cspConstData.DATA_VAL,
      checked: false,
    },
    {
      name: cspConstData.UNSAFE_EVAL,
      val: cspConstData.UNSAFE_EVAL_VAL,
      checked: false,
    },
    {
      name: cspConstData.UNSAFE_HASHES,
      val: cspConstData.UNSAFE_HASHES_VAL,
      checked: false,
    },
    {
      name: cspConstData.UNSAFE_INLINE,
      val: cspConstData.UNSAFE_INLINE_VAL,
      checked: false,
    }
  ],
  customData: ['']
};

export default defaultState;
