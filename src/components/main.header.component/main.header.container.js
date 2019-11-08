/* Node Modules */
import React from 'react';
/* Component Content */
import { mainHeaderMessage, mainHeaderState }from './main.header.state';
import MainHeaderView from './main.header.view';

class MainHeaderContainer extends React.Component {

  /**
   * @prop {object} state
   * @desc state data
   * @memberOf MainHeaderContainer
  */
  state = {
    ...mainHeaderState,
    ...mainHeaderMessage,
  }

  /**
   * @function render
   * @desc renders the component view
   * @memberOf MainHeaderContainer
  */
  render() {
    return MainHeaderView(this);
  }

}

export default MainHeaderContainer;
