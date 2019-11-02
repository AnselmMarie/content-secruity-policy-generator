/* Node Modules */
import { connect } from 'react-redux';
/* Route Content */
import defaultView from './default.view';

/**
 * @function mapStateToProps
 * @desc mapping the redux state to the props
 * @author Anselm Marie
 */
const mapStateToProps = (state) => {
  return {
    defaultData: state.cspData.default,
  }
}

/**
 * @function mapDispatchToProps
 * @desc mapping the redux dispatch to the props
 * @author Anselm Marie
 */
const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(defaultView);
