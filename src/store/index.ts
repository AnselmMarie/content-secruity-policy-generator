/* Node Module */
import {combineReducers, createStore} from 'redux';
/* Store */
import cspReducer from './csp/csp.reducer';
import pageReducer from './page/page.reducer';

const rootReducer = combineReducers({
  cspData: cspReducer,
  pageData: pageReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configStore() {
  const store = createStore(
    rootReducer,
  );

  return store;
};
