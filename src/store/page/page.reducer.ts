/* Store Content */
import {
  CURRENT_PAGE,
} from './page.constants';
import {
  IPageState,
  SystemActionTypes
 } from './page.type';
/* Reducer Content */
import pageState from './page.state';

/**
 * @function CSP Reducer
 * @desc This will update the csp store
 * @author Anselm Marie
 */
const initState: IPageState = pageState;

/**
 * @function CSP Reducer
 * @desc This will update the csp store
 * @author Anselm Marie
 * @param {object} state = initState - this will be used to update the state on the first run
 * @param {object} action - the object that was initiated by the action
 */
export default (state = initState, action: SystemActionTypes): IPageState => {
  const data = action.data;
  /**** PAGE ***/
  switch (action.type) {
    case (CURRENT_PAGE):
      const currentPage = { currentPage: data.name };
      return { ...state, ...currentPage };
  }

  return state;

};
