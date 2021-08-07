/* Node Module */
import { connect } from 'react-redux';
/* Route Content */
import GenerateContainer from './generate.container';
import { TGenerateReduxState } from './generate.type';
/* Store */
import { AppState } from '../../store';
import {
  showLoader_AC,
  hideLoader_AC,
} from '../../store/loader/loader.action';

const mapStateToProps = (state: AppState): TGenerateReduxState => {
  return {
    cspData: state.cspData,
  }
}

const mapDispatchToProps = {
  showLoader_AC,
  hideLoader_AC,
}

export default connect(mapStateToProps, mapDispatchToProps)(GenerateContainer);
