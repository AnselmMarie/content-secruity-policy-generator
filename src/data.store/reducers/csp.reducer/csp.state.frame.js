/**
 * @property frameState
 * @desc Init frame data
 * @author Anselm Marie
 */
const frameState  = {
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

export default frameState;
