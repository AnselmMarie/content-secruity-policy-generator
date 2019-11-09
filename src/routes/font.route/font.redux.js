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
import fontView from './font.view';

const mapStateToProps = (state) => {
  return {
    fontGeneral: state.cspData.fontGeneral,
    fontCustom: state.cspData.fontCustom,
  }
}

const mapDispatchToProps = {
  modifyCheckbox_AC,
  modifyUrl_AC,
  addEmptyUrl_AC,
  deleteUrl_AC,
}


export default connect(mapStateToProps, mapDispatchToProps)(fontView);