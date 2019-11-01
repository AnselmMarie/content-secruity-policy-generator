/* Node Modules */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/* Data Store */
import store from '../../data.store/reducers';
/* Routes */
import startRoute from '../start.route';
import defaultRoute from '../default.route';
import summaryRoute from '../summary.route';
import errRoute from '../err.route';

export default () => {
  return(
    <Provider store={store}>
      <div className="main-area">
        <Router>
          <Switch>
            <Route exact path="/" component={startRoute} />
            <Route exact path="/default-src" component={defaultRoute} />
            {/* <Route exact path="/img-src" component={} />
            <Route exact path="/style-src" component={} />
            <Route exact path="/script-src" component={} />
            <Route exact path="/frame-src" component={} />
            <Route exact path="/font-src" component={} /> */}
            <Route exact path="/summary" component={summaryRoute} />
            <Route component={errRoute} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}
