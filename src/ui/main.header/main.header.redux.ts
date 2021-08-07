/* Node Module */
import { connect } from 'react-redux';
/* Store */
import {
  modifyCheckbox_AC,
  addUrl_AC,
  resetData_AC,
} from '../../store/csp/csp.action';
import {
  showLoader_AC,
  hideLoader_AC,
} from '../../store/loader/loader.action';
import { AppState } from '../../store';
/* Component Content */
import MainHeaderContainer from './main.header.container';
import { IMainHeaderProps } from './main.header.type';

const mapStateToProps = (state: AppState): IMainHeaderProps => {
  return {
    cspData: state.cspData,
  };
}

const mapDispatchToProps = {
  modifyCheckbox_AC,
  addUrl_AC,
  resetData_AC,
  showLoader_AC,
  hideLoader_AC,
}

export default connect(mapStateToProps, mapDispatchToProps)(MainHeaderContainer);
