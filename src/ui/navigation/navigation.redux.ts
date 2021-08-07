/* Node Module */
import { connect } from 'react-redux';
/* Store */
import { currentPage_AC } from '../../store/page/page.action';
/* Component Content */
import NavigationView from './navigation.view';

const mapStateToProps = (): object => ({});

const mapDispatchToProps = {
  currentPage_AC,
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationView);
