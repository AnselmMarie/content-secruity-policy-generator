import { SHOW_LOADER } from './loader.constants';

/**
 * @function modifyCheckbox_AC
 * @desc modifying the type's checkbox
 */
export const showLoader_AC = () => {
  return {
    type: SHOW_LOADER,
    data: true
  }
};

/**
 * @function modifyCheckbox_AC
 * @desc modifying the type's checkbox
 */
export const hideLoader_AC = () => {
  return {
    type: SHOW_LOADER,
    data: false,
  }
};