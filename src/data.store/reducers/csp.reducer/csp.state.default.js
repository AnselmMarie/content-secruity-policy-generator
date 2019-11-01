/**
 * @property defaultState
 * @desc Init default data
 * @author Anselm Marie
 */
const defaultState  = {
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

export default defaultState;
