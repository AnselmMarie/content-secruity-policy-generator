/* Node Modules */
import { connect } from 'react-redux';
/* Data Store */
import {
  modifyCheckbox_AC,
  addUrl_AC,
  resetData_AC,
} from '../../data.store/actions';
/* Component Content */
import MainHeaderContainer from './main.header.container';

/**
 * @function mapStateToProps
 * @desc mapping the redux state to the props
 * @author Anselm Marie
 * @param {object} state - redux store
 * @return {object}
 */
const mapStateToProps = (state) => {
  return {
    cspData: state.cspData,
  };
}

/**
 * @property mapDispatchToProps
 * @desc mapping the redux dispatch to the props
 * @author Anselm Marie
 */
const mapDispatchToProps = {
  modifyCheckbox_AC,
  addUrl_AC,
  resetData_AC,
}

export default connect(mapStateToProps, mapDispatchToProps)(MainHeaderContainer);
