/* Action Content */
// import {

// } from '../actions/type.action';
/* Reducer Content */
import initState from './csp.state';

/**
 * @function CSP Reducer
 * @desc This will update the csp store
 * @author Anselm Marie
 * @param {object} state = initState - this will be used to update the state on the first run
 * @param {object} action - the object that was initiated by the action
 * @return {object} - this will either be an updated state or the original state
 */
export default (state = initState, action) => {

  switch(action.type) {
    default:
      return state;
  }

};
