/* Node Module */
import { connect } from 'react-redux';
/* Component Content */
import PageClassView from './page.class.view';

const mapStateToProps = (state) => {
  return {
    currentPage: state.pageData.currentPage,
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(PageClassView);
