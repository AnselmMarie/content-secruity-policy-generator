/* Node Module */
import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';
/* Route */
import DefaultRoute from '../../routes/default';
import ImgRoute from '../../routes/img';
import StyleRoute from '../../routes/style';
import ScriptRoute from '../../routes/script';
import FrameRoute from '../../routes/frame';
import FontRoute from '../../routes/font';
import ObjectRoute from '../../routes/object';
import GenerateRoute from '../../routes/generate';
import ErrRoute from '../../routes/err';

/**
 * @function Route View
 * @desc renders the route jsx elements
 */
export default (): ReactElement => {
  return (
    <Switch>
      <Route exact path="/" component={DefaultRoute} />
      <Route exact path="/img-src" component={ImgRoute} />
      <Route exact path="/style-src" component={StyleRoute} />
      <Route exact path="/script-src" component={ScriptRoute} />
      <Route exact path="/frame-src" component={FrameRoute} />
      <Route exact path="/font-src" component={FontRoute} />
      <Route exact path="/object-src" component={ObjectRoute} />
      <Route exact path="/generate" component={GenerateRoute} />
      <Route component={ErrRoute} />
    </Switch>
  );
};
