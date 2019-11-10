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
import fontView from './font.view';
import { IFontReduxState } from './font.type';

const mapStateToProps = (state: AppState): IFontReduxState => {
  return {
    fontGeneral: state.cspData.fontGeneral,
    fontCustom: state.cspData.fontCustom,
  }
}

const mapDispatchToProps = {
  modifyCheckbox_AC,
  modifyUrl_AC,
  addEmptyUrl_AC,
  deleteUrl_AC,
}


export default connect(mapStateToProps, mapDispatchToProps)(fontView);