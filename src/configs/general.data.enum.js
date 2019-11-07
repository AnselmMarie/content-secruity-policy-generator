/* Configs */
import cspConst from './constants/csp.name.constants';

/**
 * @property generalDataEnum
 * @desc Init font data
 * @author Anselm Marie
 */
const generalDataEnum = [
  {
    name: cspConst.NONE,
    val: cspConst.NONE_VAL,
  },
  {
    name: cspConst.SELF,
    val: cspConst.SELF_VAL,
  },
  {
    name: cspConst.WILDCARD,
    val: cspConst.WILDCARD_VAL,
  },
  {
    name: cspConst.DATA,
    val: cspConst.DATA_VAL,
  },
  {
    name: cspConst.UNSAFE_EVAL,
    val: cspConst.UNSAFE_EVAL_VAL,
  },
  {
    name: cspConst.UNSAFE_HASHES,
    val: cspConst.UNSAFE_HASHES_VAL,
  },
  {
    name: cspConst.UNSAFE_INLINE,
    val: cspConst.UNSAFE_INLINE_VAL,
  }
];

export default generalDataEnum;
