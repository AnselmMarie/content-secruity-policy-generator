/* Node Module */
import { connect } from 'react-redux';
/* Data Store */
import {
  modifyCheckbox_AC,
  modifyUrl_AC,
  addEmptyUrl_AC,
  deleteUrl_AC,
} from '../../data.store/actions';
/* Route Content */
import defaultView from './default.view';

const mapStateToProps = (state) => {
  return {
    defaultGeneral: state.cspData.defaultGeneral,
    defaultCustom: state.cspData.defaultCustom,
  }
};

const mapDispatchToProps = {
  modifyCheckbox_AC,
  modifyUrl_AC,
  addEmptyUrl_AC,
  deleteUrl_AC,
};

export default connect(mapStateToProps, mapDispatchToProps)(defaultView);
