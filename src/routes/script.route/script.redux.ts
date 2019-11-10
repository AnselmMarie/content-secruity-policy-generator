/* Node Module */
import { connect } from 'react-redux';
/* Store */
import {
  modifyCheckbox_AC,
  modifyUrl_AC,
  addEmptyUrl_AC,
  deleteUrl_AC,
} from '../../store/csp/csp.action';
import { AppState } from '../../store';
/* Route Content */
import ScriptView from './script.view';
import { IScriptReduxState } from './script.type';

const mapStateToProps = (state: AppState): IScriptReduxState => {
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
