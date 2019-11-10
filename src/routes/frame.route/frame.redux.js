/* Node Module */
import { connect } from 'react-redux';
/* Store */
import {
  modifyCheckbox_AC,
  modifyUrl_AC,
  addEmptyUrl_AC,
  deleteUrl_AC,
} from '../../store/csp/csp.action';
/* Route Content */
import frameView from './frame.view';

/**
 * @function mapStateToProps
 * @desc mapping the redux state to the props
 * @author Anselm Marie
 * @param {object} state - redux store
 * @return {object}
 */
const mapStateToProps = (state) => {
  return {
    frameGeneral: state.cspData.frameGeneral,
    frameCustom: state.cspData.frameCustom,
  }
}

/**
 * @property mapDispatchToProps
 * @desc mapping the redux dispatch to the props
 * @author Anselm Marie
 */
const mapDispatchToProps = {
  modifyCheckbox_AC,
  modifyUrl_AC,
  addEmptyUrl_AC,
  deleteUrl_AC,
}


export default connect(mapStateToProps, mapDispatchToProps)(frameView);
