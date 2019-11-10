/* Node Module */
import { connect } from 'react-redux';
/* Route Content */
import GenerateContainer from './generate.container';
/* Store */
import { AppState } from '../../store';

const mapStateToProps = (state: AppState): any => {
  return{
    cspData: state.cspData,
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(GenerateContainer);
