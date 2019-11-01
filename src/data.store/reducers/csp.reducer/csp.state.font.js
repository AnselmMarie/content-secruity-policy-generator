/**
 * @property fontState
 * @desc Init font data
 * @author Anselm Marie
 */
const fontState  = {
  generalData: [
    {
      name: WILDCARD,
      val: false,
    },
    {
      name: NONE,
      val: false,
    },
    {
      name: SELF,
      val: false,
    },
    {
      name: DATA,
      val: false,
    },
    {
      name: UNSAFE_INLINE,
      val: false,
    },
    {
      name: UNSAFE_HASHES,
      val: false,
    },
    {
      name: UNSAFE_EVAL,
      val: false,
    }
  ],
  customData: []
};

export default fontState;
