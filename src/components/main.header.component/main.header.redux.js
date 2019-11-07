/* Node Modules */
import { connect } from 'react-redux';
/* Data Store */
import {
  modifyCheckbox_AC,
  addUrl_AC,
  resetData_AC,
} from '../../data.store/actions';
/* Component Content */
import MainHeaderView from './main.header.view';

const mapStateToProps = (state) => {
  return {
    cspData: state.cspData,
  };
}

const mapDispatchToProps = {
  modifyCheckbox_AC,
  addUrl_AC,
  resetData_AC,
}

export default connect(mapStateToProps, mapDispatchToProps)(MainHeaderView);
