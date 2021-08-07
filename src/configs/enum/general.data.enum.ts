import { CSP_CONTENT } from '../../configs/constants/content.constants';

const generalDataEnum = [
  {
    name: CSP_CONTENT.NONE,
    val: CSP_CONTENT.NONE_VAL,
  },
  {
    name: CSP_CONTENT.SELF,
    val: CSP_CONTENT.SELF_VAL,
  },
  {
    name: CSP_CONTENT.WILDCARD,
    val: CSP_CONTENT.WILDCARD_VAL,
  },
  {
    name: CSP_CONTENT.DATA,
    val: CSP_CONTENT.DATA_VAL,
  },
  {
    name: CSP_CONTENT.UNSAFE_EVAL,
    val: CSP_CONTENT.UNSAFE_EVAL_VAL,
  },
  {
    name: CSP_CONTENT.UNSAFE_HASHES,
    val: CSP_CONTENT.UNSAFE_HASHES_VAL,
  },
  {
    name: CSP_CONTENT.UNSAFE_INLINE,
    val: CSP_CONTENT.UNSAFE_INLINE_VAL,
  },
];

export default generalDataEnum;
