/* Node Module */
import { connect } from 'react-redux';
/* Component Content */
import PageClassView from './page.class.view';
/* Store */
import { AppState} from '../../store';

const mapStateToProps = (state: AppState) => {
  return {
    currentPage: state.pageData.currentPage,
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(PageClassView);
