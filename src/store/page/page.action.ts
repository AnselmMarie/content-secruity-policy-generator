/* Store Content */
import { CURRENT_PAGE } from './page.constants';
import { ICurrentPage_AC } from './page.type';

/**
 * @function currentPage_AC
 * @desc store the current page content
 * @author Anselm Marie
 * @param {string} type - action type
 * @param {object} data - data needed for update to happen
 * @return {object}
 */
export const currentPage_AC = (data: ICurrentPage_AC) => {
  return {
    type: CURRENT_PAGE,
    data,
  }
}
