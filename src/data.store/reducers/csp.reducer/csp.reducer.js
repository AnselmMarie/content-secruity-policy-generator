/* Action Content */
import {
  DEFAULT_MODIFY_CHECKBOX,
  DEFAULT_MODIFY_URL,
  DEFAULT_ADD_URL,
  DEFAULT_DELETE_URL,
  IMG_MODIFY_CHECKBOX,
  IMG_MODIFY_URL,
  IMG_ADD_URL,
  IMG_DELETE_URL,
  STYLE_MODIFY_CHECKBOX,
  STYLE_MODIFY_URL,
  STYLE_ADD_URL,
  STYLE_DELETE_URL,
  SCRIPT_MODIFY_CHECKBOX,
  SCRIPT_MODIFY_URL,
  SCRIPT_ADD_URL,
  SCRIPT_DELETE_URL,
  FRAME_MODIFY_CHECKBOX,
  FRAME_MODIFY_URL,
  FRAME_ADD_URL,
  FRAME_DELETE_URL,
  FONT_MODIFY_CHECKBOX,
  FONT_MODIFY_URL,
  FONT_ADD_URL,
  FONT_DELETE_URL,
} from '../../actions/action.constants';
/* Modules */
import { updateChecked, updateUrl } from '../../../modules/redux.helper.module';
/* Reducer Content */
import initState from './csp.state';

/**
 * @function CSP Reducer
 * @desc This will update the csp store
 * @author Anselm Marie
 * @param {object} state = initState - this will be used to update the state on the first run
 * @param {object} action - the object that was initiated by the action
 * @return {object}
 */
export default (state = initState, action) => {
  console.log('action.type', action.type);
  const data = action.data;

  /**** DEFAULT-SRC ***/
  switch (action.type) {
    case (DEFAULT_MODIFY_CHECKBOX):
      const default1 = updateChecked(state, data, 'defaultGeneral');

      if (default1.currentObj.name === data.name) {
        return { ...state, defaultGeneral: default1.clonedData };
      } else {
        console.log('ERROR IN DATA BEING UPDATED');
      }

    case (DEFAULT_MODIFY_URL):
      const default2 = updateUrl(state, data, 'defaultCustom');
      return { ...state, defaultCustom: default2.clonedData };

    case (DEFAULT_ADD_URL):
      return;
    case (DEFAULT_DELETE_URL):
      return;
  }

  /**** IMG-SRC ***/
  switch (action.type) {
    case (IMG_MODIFY_CHECKBOX):
      const obj = updateChecked(state, data);

      if (obj.currentObj.name === data.name) {
        return { ...state, imgGeneral: obj.clonedData };
      } else {
        console.log('ERROR IN DATA BEING UPDATED');
      }

    case (IMG_MODIFY_URL):
      return;
    case (IMG_ADD_URL):
      return;
    case (IMG_DELETE_URL):
      return;
  }

  /**** STYLE-SRC ***/
  switch (action.type) {
    case (STYLE_MODIFY_CHECKBOX):
      const obj = updateChecked(state, data);

      if (obj.currentObj.name === data.name) {
        return { ...state, styleGeneral: obj.clonedData };
      } else {
        console.log('ERROR IN DATA BEING UPDATED');
      }

    case (STYLE_MODIFY_URL):
      return;
    case (STYLE_ADD_URL):
      return;
    case (STYLE_DELETE_URL):
      return;
  }

  /**** SCRIPT-SRC ***/
  switch (action.type) {
    case (SCRIPT_MODIFY_CHECKBOX):
      const obj = updateChecked(state, data);

      if (obj.currentObj.name === data.name) {
        return { ...state, scriptGeneral: obj.clonedData };
      } else {
        console.log('ERROR IN DATA BEING UPDATED');
      }

    case (SCRIPT_MODIFY_URL):
      return;
    case (SCRIPT_ADD_URL):
      return;
    case (SCRIPT_DELETE_URL):
      return;
  }

  /**** FRAME-SRC ***/
  switch (action.type) {
    case (FRAME_MODIFY_CHECKBOX):
      const obj = updateChecked(state, data);

      if (obj.currentObj.name === data.name) {
        return { ...state, frameGeneral: obj.clonedData };
      } else {
        console.log('ERROR IN DATA BEING UPDATED');
      }

    case (FRAME_MODIFY_URL):
      return;
    case (FRAME_ADD_URL):
      return;
    case (FRAME_DELETE_URL):
      return;
  }

  /**** FONT-SRC ***/
  switch (action.type) {
    case (FONT_MODIFY_CHECKBOX):
      const obj = updateChecked(state, data);

      if (obj.currentObj.name === data.name) {
        return { ...state, fontGeneral: obj.clonedData };
      } else {
        console.log('ERROR IN DATA BEING UPDATED');
      }

    case (FONT_MODIFY_URL):
      return;
    case (FONT_ADD_URL):
      return;
    case (FONT_DELETE_URL):
      return;
  }

  return state;

};
