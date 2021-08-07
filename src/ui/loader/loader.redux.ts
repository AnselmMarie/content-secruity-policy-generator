/* Node Module */
import { connect } from 'react-redux';
/* Data */
import { AppState } from '../../store';
/* Component Content */
import LoaderView from './loader.view';
import { TLoaderProps } from './loader.type';

const mapStateToProps = (state: AppState): TLoaderProps => {
  return {
    loaderData: state.loaderData,
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(LoaderView);
