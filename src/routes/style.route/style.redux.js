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
import StyleView from './style.view';

/**
 * @function mapStateToProps
 * @desc mapping the redux state to the props
 * @author Anselm Marie
 * @param {object} state - redux store
 * @return {object}
 */
const mapStateToProps = (state) => {
  return {
    styleGeneral: state.cspData.styleGeneral,
    styleCustom: state.cspData.styleCustom,
  }
}

/**
 * @property mapDispatchToProps
 * @desc mapping the redux dispatch to the props
 * @author Anselm Marie
 */
const mapDispatchToProps = {
  modifyCheckbox,
  modifyUrl,
  addUrl,
  deleteUrl,
}

export default connect(mapStateToProps, mapDispatchToProps)(StyleView);
