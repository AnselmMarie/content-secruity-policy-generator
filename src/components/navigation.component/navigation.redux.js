/* Node Module */
import { connect } from 'react-redux';
/* Data Store */
import { currentPage_AC } from '../../data.store/actions';
/* Component Content */
import NavigationView from './navigation.view';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  currentPage_AC,
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationView);
