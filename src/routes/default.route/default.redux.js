/* Node Modules */
import { connect } from 'react-redux';
/* Data Store */
import {
  modifyCheckbox,
  modifyUrl,
  addUrl,
  deleteUrl,
} from '../../data.store/actions';
/* Route Content */
import defaultView from './default.view';

/**
 * @function mapStateToProps
 * @desc mapping the redux state to the props
 * @author Anselm Marie
 */
const mapStateToProps = (state) => {
  return {
    defaultGeneral: state.cspData.defaultGeneral,
    defaultCustom: state.cspData.defaultCustom,
  }
}

/**
 * @function mapDispatchToProps
 * @desc mapping the redux dispatch to the props
 * @author Anselm Marie
 */
const mapDispatchToProps = {
  modifyCheckbox,
  modifyUrl,
  addUrl,
  deleteUrl,
}


export default connect(mapStateToProps, mapDispatchToProps)(defaultView);
