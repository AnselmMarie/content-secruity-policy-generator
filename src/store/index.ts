/* Node Module */
import {combineReducers, createStore} from 'redux';
/* Store */
import cspReducer from './csp/csp.reducer';
import pageReducer from './page/page.reducer';
import loaderReducer from './loader/loader.reducer';

const rootReducer = combineReducers({
  cspData: cspReducer,
  pageData: pageReducer,
  loaderData: loaderReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configStore() {
  const store = createStore(
    rootReducer,
  );

  return store;
};
