/* Node Modules */
import { connect } from 'react-redux';
/* Component Content */
import ModalView from './modal.view';

const mapStateToProps = (state) => {
  isModalShown = state.isModalShown;
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ModalView);
