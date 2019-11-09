/* Node Module */
import { connect } from 'react-redux';
/* Data Store */
import {
  modifyCheckbox_AC,
  modifyUrl_AC,
  addEmptyUrl_AC,
  deleteUrl_AC,
} from '../../data.store/actions';
/* Route Content */
import ImgView from './img.view';

const mapStateToProps = (state) => {
  return {
    imgGeneral: state.cspData.imgGeneral,
    imgCustom: state.cspData.imgCustom,
  }
};

const mapDispatchToProps = {
  modifyCheckbox_AC,
  modifyUrl_AC,
  addEmptyUrl_AC,
  deleteUrl_AC,
};

export default connect(mapStateToProps, mapDispatchToProps)(ImgView);
