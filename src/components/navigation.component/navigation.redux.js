/* Node Module */
import { connect } from 'react-redux';
/* Data Store */
import { currentPage_AC } from '../../store/page/page.action';
/* Component Content */
import NavigationView from './navigation.view';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  currentPage_AC,
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationView);
