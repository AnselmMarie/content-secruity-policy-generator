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
import StyleView from './style.view';
import { IStyleReduxState } from './style.type';

const mapStateToProps = (state: AppState): IStyleReduxState => {
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
