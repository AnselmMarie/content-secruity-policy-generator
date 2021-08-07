/* Node Module */
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React, { ReactElement } from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
/* Component */
import NavigationComponent from '../../ui/navigation';
import RouteComponent from '../../ui/route';
import MainHeaderComponent from '../../ui/main.header';
import PageClassComponent from '../../ui/page.class';
import LoaderComponent from '../../ui/loader';
/* Store */
import configureStore from '../../store';

/**
 * @function Store
 * @desc configuration of the redux store
 */
const store = configureStore();

/**
 * @function App View
 * @desc render the app view
 */
export default (): ReactElement => {
  return (
    <Provider store={store}>
      <HashRouter>
        <PageClassComponent>
          <LoaderComponent />
          <aside className="side-area">
            <NavigationComponent />
          </aside>
          <main role="main" className="main-area">
            <MainHeaderComponent />
            <section className="section-area">
              <RouteComponent />
            </section>
          </main>
        </PageClassComponent>
      </HashRouter>
    </Provider>
  );
};
