/* Node Modules */
import { connect } from 'react-redux';
/* Component Content */
import PageClassView from './page.class.view';

/**
 * @function mapStateToProps
 * @desc mapping the redux state to the props
 * @author Anselm Marie
 * @param {object} state - redux store
 * @return {object}
 */
const mapStateToProps = (state) => {
  return {
    currentPage: state.pageData.currentPage,
  }
}

/**
 * @property mapDispatchToProps
 * @desc mapping the redux dispatch to the props
 * @author Anselm Marie
 */
const mapDispatchToProps = {}


export default connect(mapStateToProps, mapDispatchToProps)(PageClassView);
