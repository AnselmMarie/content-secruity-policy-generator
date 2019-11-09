/* Node Module */
import {combineReducers, createStore} from 'redux';
/* Data Store */
import cspReducer from './csp.reducer';
import pageReducer from './page.reducer';

export default createStore(
  combineReducers({
    cspData: cspReducer,
    pageData: pageReducer,
  })
);
