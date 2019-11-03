/**
 * @function updateChecked
 * @desc update the check data
 * @author Anselm Marie
 * @param {object} state = the current state of this store
 * @param {object} data - data send from action creator
 * @return {object}
 */
export const updateChecked = (state, data) => {
  const currentObj = state.defaultGeneral[data.index];
  let clonedData = [ ...state.defaultGeneral ];
  clonedData[data.index].checked = !clonedData[data.index].checked;

  return {
    currentObj,
    clonedData
  }
}
