/**
 * @function modifyCheckbox_AC
 * @desc modifying the type's checkbox
 * @author Anselm Marie
 * @param {string} type - the CSP section
 * @param {object} data - data needed for update to happen
 * @return {object}
 */
export const modifyCheckbox_AC = (type, {index, name}) => {
  return {
    type: `${type}_modify_checkbox`,
    data: {
      index,
      name
    }
  }
};

/**
 * @function modifyUrl_AC
 * @desc modifying the type's url
 * @author Anselm Marie
 * @param {string} type - the CSP section
 * @param {object} data - data needed for update to happen
 * @return {object}
 */
export const modifyUrl_AC = (type, {index, name}) => {
  return {
    type: `${type}_modify_url`,
    data: {
      index,
      name,
    }
  }
};

/**
 * @function addEmptyUrl_AC
 * @desc add the type's empty url
 * @author Anselm Marie
 * @param {string} type - the CSP section
 * @return {object}
 */
export const addEmptyUrl_AC = (type) => {
  return {
    type: `${type}_add_empty_url`,
  }
};

/**
 * @function addUrl_AC
 * @desc add the type's url
 * @author Anselm Marie
 * @param {string} type - the CSP section
 * @param {object} data - data needed for update to happen
 * @return {object}
 */
export const addUrl_AC = (type, {name}) => {
  return {
    type: `${type}_add_url`,
    data: {
      name,
    }
  }
};

/**
 * @function deleteUrl_AC
 * @desc delete the type's url
 * @author Anselm Marie
 * @param {string} type - the CSP section
 * @param {object} data - data needed for update to happen
 * @return {object}
 */
export const deleteUrl_AC = (type, {index, name}) => {
  return {
    type: `${type}_delete_url`,
    data: {
      index,
      name
    }
  }
};
