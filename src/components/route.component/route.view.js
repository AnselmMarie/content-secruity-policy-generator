/* Node Modules */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
/* Routes */
import defaultRoute from '../../routes/default.route';
import generateRoute from '../../routes/generate.route';
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
      <Route exact path="/generate" component={generateRoute} />
      <Route component={errRoute} />
  </Switch>
  )
}