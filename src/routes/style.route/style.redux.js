/* Node Module */
import { connect } from 'react-redux';
/* Store */
import {
  modifyCheckbox_AC,
  modifyUrl_AC,
  addEmptyUrl_AC,
  deleteUrl_AC,
} from '../../store/csp/csp.action';
/* Route Content */
import StyleView from './style.view';

const mapStateToProps = (state) => {
  return {
    styleGeneral: state.cspData.styleGeneral,
    styleCustom: state.cspData.styleCustom,
  }
}

const mapDispatchToProps = {
  modifyCheckbox_AC,
  modifyUrl_AC,
  addEmptyUrl_AC,
  deleteUrl_AC,
}

export default connect(mapStateToProps, mapDispatchToProps)(StyleView);
