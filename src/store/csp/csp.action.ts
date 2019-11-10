/* Store Content */
import {
  RESET_DATA,
} from './csp.constants';
import {
  ICheckboxData_AC,
  IUrlData_AC,
} from './csp.type';
import { CspActionTypes } from './csp.type';

/**
 * @function modifyCheckbox_AC
 * @desc modifying the type's checkbox
 * @param type - the CSP section
 * @param data - data needed for update to happen
 */
export const modifyCheckbox_AC = (type: number, data: ICheckboxData_AC): CspActionTypes => {
  return {
    type: `${type}_modify_checkbox`,
    data: {
      index: data.index,
      name: data.name
    }
  }
};

/**
 * @function modifyUrl_AC
 * @desc modifying the type's url
 * @author Anselm Marie
 * @param type - the CSP section
 * @param data - data needed for update to happen
 */
export const modifyUrl_AC = (type: number, data: IUrlData_AC): CspActionTypes => {
  return {
    type: `${type}_modify_url`,
    data: {
      index: data.index,
      url: data.url
    }
  }
};

/**
 * @function addEmptyUrl_AC
 * @desc add the type's empty url
 * @author Anselm Marie
 * @param type - the CSP section
 */
export const addEmptyUrl_AC = (type: number): CspActionTypes => {
  return {
    type: `${type}_add_empty_url`
  }
};

/**
 * @function addUrl_AC
 * @desc add the type's url
 * @author Anselm Marie
 * @param type - the CSP section
 * @param data - data needed for update to happen
 */
export const addUrl_AC = (type: number, data: IUrlData_AC): CspActionTypes => {
  return {
    type: `${type}_add_url`,
    data: {
      url: data.url,
    }
  }
};

/**
 * @function deleteUrl_AC
 * @desc delete the type's url
 * @author Anselm Marie
 * @param type - the CSP section
 * @param data - data needed for update to happen
 */
export const deleteUrl_AC = (type: number, data: IUrlData_AC): CspActionTypes => {
  return {
    type: `${type}_delete_url`,
    data: {
      index: data.index,
      url: data.url,
    }
  }
};

/**
 * @function resetData_AC
 * @desc reset all content data
 * @author Anselm Marie
 */
export const resetData_AC = (): CspActionTypes => {
  return {
    type: RESET_DATA
  }
};
