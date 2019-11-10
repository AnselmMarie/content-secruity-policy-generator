/* Node Module */
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
/* Component */
import NavigationComponent from '../../components/navigation.component';
import RouteComponent from '../../components/route.component';
import MainHeaderComponent from '../../components/main.header.component';
import PageClassComponent from '../../components/page.class.component';
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
      <Router>
        <PageClassComponent>
          <aside className="side-area">
            <NavigationComponent />
          </aside>
          <main role="main" className="main-area">
            <header>
              <MainHeaderComponent />
            </header>
            <section className="section-area">
              <RouteComponent />
            </section>
          </main>
        </PageClassComponent>
      </Router>
    </Provider>
  );
}
