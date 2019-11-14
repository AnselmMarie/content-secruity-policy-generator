/* Node Module */
import { connect } from 'react-redux';
/* Store */
import {
  modifyCheckbox_AC,
  modifyUrl_AC,
  addEmptyUrl_AC,
  deleteUrl_AC,
} from '../../store/csp/csp.action';
import { AppState } from 'store';
/* Route Content */
import ObjectView from './object.view';
import { IObjectReduxState } from './object.type';

const mapStateToProps = (state: AppState): IObjectReduxState => {
  return {
    objectGeneral: state.cspData.objectGeneral,
    objectCustom: state.cspData.objectCustom,
  }
}

const mapDispatchToProps = {
  modifyCheckbox_AC,
  modifyUrl_AC,
  addEmptyUrl_AC,
  deleteUrl_AC,
}

export default connect(mapStateToProps, mapDispatchToProps)(ObjectView);
