/* Node Modules */
import { connect } from 'react-redux';
/* Route Content */
import GenerateContainer from './generate.container';

/**
 * @function mapStateToProps
 * @desc mapping the redux state to the props
 * @author Anselm Marie
 * @param {object} state - redux store
 * @return {object}
 */
const mapStateToProps = (state) => {
  return{
    cspData: state.cspData,
  }
}

/**
 * @property mapDispatchToProps
 * @desc mapping the redux dispatch to the props
 * @author Anselm Marie
 */
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(GenerateContainer);
