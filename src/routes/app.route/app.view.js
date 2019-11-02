/* Node Modules */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
/* Components */
import NavigationComponent from '../../components/navigation.component';
import RouteComponent from '../../components/route.component';
import MainHeaderComponent from '../../components/main.header.component';
/* Data Store */
import store from '../../data.store/reducers';

export default () => {
  return(
    <Provider store={store}>
      <Router>
        <aside className="side-area">
          <NavigationComponent />
        </aside>
        <div className="main-area">
          <header>
            <MainHeaderComponent />
          </header>
          <section className="section-area">
            <RouteComponent />
          </section>
        </div>
      </Router>
    </Provider>
  );
}
