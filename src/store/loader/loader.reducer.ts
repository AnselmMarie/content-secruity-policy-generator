/* Store Content */
import { SHOW_LOADER } from './loader.constants';
import { ILoaderState, LoaderActionTypes } from './loader.type';
/* Reducer Content */
import loaderState from './loader.state';

/**
 * @property initState
 * @desc init state of the the page reducer
 */
const initState: ILoaderState = loaderState;

/**
 * @function CSP Reducer
 * @desc This will update the csp store
 * @param state = initState - this will be used to update the state on the first run
 * @param action - the object that was initiated by the action
 */
export default (state = initState, action: LoaderActionTypes): ILoaderState => {
  const data = action.data;

  /**** LOADER ***/
  if (action.type === SHOW_LOADER) {
    return { ...state, isLoaderShown: data };
  }

  return state;
};
