/**
 * @function updateChecked
 * @desc update the check data
 * @author Anselm Marie
 * @param {object} state = the current state of this store
 * @param {object} data - data send from action creator
 * @param {string} dataOfInterest - the data that needs to be checked
 * @return {object}
 */
export const updateChecked = (state, data, dataOfInterest) => {
  const currentObj = state[dataOfInterest][data.index];
  let clonedData = [ ...state[dataOfInterest] ];
  clonedData[data.index].checked = !clonedData[data.index].checked;

  return {
    currentObj,
    clonedData
  }
}

/**
 * @function updateUrl
 * @desc update url content
 * @author Anselm Marie
 * @param {object} state = the current state of this store
 * @param {object} data - data send from action creator
 * @param {string} dataOfInterest - the data that needs to be checked
 * @return {object}
 */
export const updateUrl = (state, data, dataOfInterest) => {
  const currentObj = state[dataOfInterest][data.index];
  console.log('currentObj', currentObj);
  console.log('name', data.name);
  let clonedData = [ ...state[dataOfInterest] ];
  clonedData[data.index] = data.name;

  return {
    currentObj,
    clonedData
  }
}