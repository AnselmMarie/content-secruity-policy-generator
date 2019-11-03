/**
 * @function modifyCheckbox
 * @desc modifying the type's checkbox
 * @author Anselm Marie
 * @param {string} type - the CSP section
 * @return {object} - this object and being sent to the reducer
 */
export const modifyCheckbox = (type, {index, name}) => {
  return {
    type: `${type}_modify_checkbox`,
    data: {
      index,
      name
    }
  }
};

/**
 * @function modifyUrl
 * @desc modifying the type's url
 * @author Anselm Marie
 * @param {string} type - the CSP section
 * @return {object} - this object and being sent to the reducer
 */
export const modifyUrl = (type, {index, name}) => {
  return {
    type: `${type}_modify_url`,
    data: {
      index,
      name,
    }
  }
};

/**
 * @function addUrl
 * @desc add the type's url
 * @author Anselm Marie
 * @param {string} type - the CSP section
 * @return {object} - this object and being sent to the reducer
 */
export const addUrl = (type, {index, name}) => {
  return {
    type: `${type}_add_url`,
    data: {
      index,
      name
    }
  }
};

/**
 * @function deleteUrl
 * @desc delete the type's url
 * @author Anselm Marie
 * @param {string} type - the CSP section
 * @return {object} - this object and being sent to the reducer
 */
export const deleteUrl = (type, {index, name}) => {
  return {
    type: `${type}_delete_url`,
    data: {
      index,
      name
    }
  }
};