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
import fontView from './font.view';

/**
 * @function mapStateToProps
 * @desc mapping the redux state to the props
 * @author Anselm Marie
 * @param {object} state - redux store
 * @return {object}
 */
const mapStateToProps = (state) => {
  return {
    fontGeneral: state.cspData.fontGeneral,
    fontCustom: state.cspData.fontCustom,
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


export default connect(mapStateToProps, mapDispatchToProps)(fontView);