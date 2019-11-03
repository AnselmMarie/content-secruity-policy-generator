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
import ImgView from './img.view';

/**
 * @function mapStateToProps
 * @desc mapping the redux state to the props
 * @author Anselm Marie
 * @param {object} state - redux store
 * @return {object}
 */
const mapStateToProps = (state) => {
  return {
    imgGeneral: state.cspData.imgGeneral,
    imgCustom: state.cspData.imgCustom,
  }
};

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
};

export default connect(mapStateToProps, mapDispatchToProps)(ImgView);
