/* Node Modules */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
/* Routes */
import defaultRoute from '../../routes/default.route';
import summaryRoute from '../../routes/summary.route';
import errRoute from '../../routes/err.route';

export default ($this) => {
  return (
    <Switch>
      <Route exact path="/" component={defaultRoute} />
      {/* <Route exact path="/img-src" component={} />
      <Route exact path="/style-src" component={} />
      <Route exact path="/script-src" component={} />
      <Route exact path="/frame-src" component={} />
      <Route exact path="/font-src" component={} /> */}
      <Route exact path="/summary" component={summaryRoute} />
      <Route component={errRoute} />
  </Switch>
  )
}