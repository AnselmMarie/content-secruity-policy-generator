/* Node Module */
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
/* Component */
import NavigationComponent from '../../components/navigation.component';
import RouteComponent from '../../components/route.component';
import MainHeaderComponent from '../../components/main.header.component';
import PageClassComponent from '../../components/page.class.component';
import LoaderComponent from '../../components/loader.component';
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
export default (): JSX.Element => {
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
}
