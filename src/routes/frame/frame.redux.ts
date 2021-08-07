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
import frameView from './frame.view';
import { IFrameReduxState } from './frame.type';

const mapStateToProps = (state: AppState): IFrameReduxState => {
  return {
    frameGeneral: state.cspData.frameGeneral,
    frameCustom: state.cspData.frameCustom,
  }
}

const mapDispatchToProps = {
  modifyCheckbox_AC,
  modifyUrl_AC,
  addEmptyUrl_AC,
  deleteUrl_AC,
}


export default connect(mapStateToProps, mapDispatchToProps)(frameView);
