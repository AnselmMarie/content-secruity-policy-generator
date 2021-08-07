/* Store Content */
import { CURRENT_PAGE } from './page.constants';
import { IPageState, PageActionTypes } from './page.type';
/* Reducer Content */
import pageState from './page.state';

/**
 * @property initState
 * @desc init state of the the page reducer
 */
const initState: IPageState = pageState;

/**
 * @function CSP Reducer
 * @desc This will update the csp store
 * @param state = initState - this will be used to update the state on the first run
 * @param action - the object that was initiated by the action
 */
export default (state = initState, action: PageActionTypes): IPageState => {
  const data = action.data;

  /**** PAGE ***/
  if (action.type === CURRENT_PAGE) {
    const currentPage = { currentPage: data.name };
    return { ...state, ...currentPage };
  }

  return state;
};
