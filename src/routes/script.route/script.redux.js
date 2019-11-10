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
import ScriptView from './script.view';

const mapStateToProps = (state) => {
  return {
    scriptGeneral: state.cspData.scriptGeneral,
    scriptCustom: state.cspData.scriptCustom,
  }
}

const mapDispatchToProps = {
  modifyCheckbox_AC,
  modifyUrl_AC,
  addEmptyUrl_AC,
  deleteUrl_AC,
}

export default connect(mapStateToProps, mapDispatchToProps)(ScriptView);
