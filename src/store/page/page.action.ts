/* Store Content */
import { CURRENT_PAGE } from './page.constants';
import {
  ICurrentPage_AC,
  UpdatePageAction,
} from './page.type';

/**
 * @function currentPage_AC
 * @desc store the current page content
 * @param data - data needed for update to happen
 */
export const currentPage_AC = (data: ICurrentPage_AC): UpdatePageAction => {
  return {
    type: CURRENT_PAGE,
    data,
  }
}
