/* Node Modules */
import {combineReducers, createStore} from 'redux';
/* Data Store */
import cspReducer from './csp.reducer';

export default createStore(
  combineReducers({
    cspData: cspReducer,
  })
);
