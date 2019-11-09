/* Node Module */
import { connect } from 'react-redux';
/* Route Content */
import GenerateContainer from './generate.container';

const mapStateToProps = (state) => {
  return{
    cspData: state.cspData,
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(GenerateContainer);
