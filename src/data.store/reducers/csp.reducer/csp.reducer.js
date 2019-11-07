/* Action Content */
import {
  DEFAULT_MODIFY_CHECKBOX,
  DEFAULT_MODIFY_URL,
  DEFAULT_ADD_EMPTY_URL,
  DEFAULT_ADD_URL,
  DEFAULT_DELETE_URL,
  IMG_MODIFY_CHECKBOX,
  IMG_MODIFY_URL,
  IMG_ADD_EMPTY_URL,
  IMG_DELETE_URL,
  STYLE_MODIFY_CHECKBOX,
  STYLE_MODIFY_URL,
  STYLE_ADD_EMPTY_URL,
  STYLE_DELETE_URL,
  SCRIPT_MODIFY_CHECKBOX,
  SCRIPT_MODIFY_URL,
  SCRIPT_ADD_EMPTY_URL,
  SCRIPT_DELETE_URL,
  FRAME_MODIFY_CHECKBOX,
  FRAME_MODIFY_URL,
  FRAME_ADD_EMPTY_URL,
  FRAME_DELETE_URL,
  FONT_MODIFY_CHECKBOX,
  FONT_MODIFY_URL,
  FONT_ADD_EMPTY_URL,
  FONT_DELETE_URL,
} from '../../actions/action.constants';
/* Modules */
import {
  updateChecked,
  updateUrl,
  addUrl,
  deleteUrl
} from '../../../modules/redux.helper.module';
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

    case (DEFAULT_ADD_EMPTY_URL):
      const default3 = addUrl(state, null, 'defaultCustom');
      return { ...state, defaultCustom: default3 };

    case (DEFAULT_ADD_URL):
      const url = data && data.url;
      const default4 = addUrl(state, url, 'defaultCustom');
      return { ...state, defaultCustom: default4 };

    case (DEFAULT_DELETE_URL):
      const default5 = deleteUrl(state, data, 'defaultCustom');
      return { ...state, defaultCustom: default5.clonedData };
  }

  /**** IMG-SRC ***/
  switch (action.type) {
    case (IMG_MODIFY_CHECKBOX):
      const img1 = updateChecked(state, data, 'imgGeneral');

      if (img1.currentObj.name === data.name) {
        return { ...state, imgGeneral: img1.clonedData };
      } else {
        console.log('ERROR IN DATA BEING UPDATED');
      }

    case (IMG_MODIFY_URL):
      const img2 = updateUrl(state, data, 'imgCustom');
      return { ...state, imgCustom: img2.clonedData };

    case (IMG_ADD_EMPTY_URL):
      const img3 = addUrl(state, 'imgCustom');
      return { ...state, imgCustom: img3 };

    case (IMG_DELETE_URL):
      const img4 = deleteUrl(state, data, 'imgCustom');
      return { ...state, imgCustom: img4.clonedData };
  }

  /**** STYLE-SRC ***/
  switch (action.type) {
    case (STYLE_MODIFY_CHECKBOX):
      const style1 = updateChecked(state, data, 'styleGeneral');

      if (style1.currentObj.name === data.name) {
        return { ...state, styleGeneral: style1.clonedData };
      } else {
        console.log('ERROR IN DATA BEING UPDATED');
      }

    case (STYLE_MODIFY_URL):
      const style2 = updateUrl(state, data, 'styleCustom');
      return { ...state, styleCustom: style2.clonedData };

    case (STYLE_ADD_EMPTY_URL):
      const style3 = addUrl(state, 'styleCustom');
      return { ...state, styleCustom: style3 };

    case (STYLE_DELETE_URL):
      const style4 = deleteUrl(state, data, 'styleCustom');
      return { ...state, styleCustom: style4.clonedData };
  }

  /**** SCRIPT-SRC ***/
  switch (action.type) {
    case (SCRIPT_MODIFY_CHECKBOX):
      const script1 = updateChecked(state, data, 'scriptGeneral');

      if (script1.currentObj.name === data.name) {
        return { ...state, scriptGeneral: script1.clonedData };
      } else {
        console.log('ERROR IN DATA BEING UPDATED');
      }

    case (SCRIPT_MODIFY_URL):
      const script2 = updateUrl(state, data, 'scriptCustom');
      return { ...state, scriptCustom: script2.clonedData };

    case (SCRIPT_ADD_EMPTY_URL):
      const script3 = addUrl(state, 'scriptCustom');
      return { ...state, scriptCustom: script3 };

    case (SCRIPT_DELETE_URL):
      const script4 = deleteUrl(state, data, 'scriptCustom');
      return { ...state, scriptCustom: script4.clonedData };
  }

  /**** FRAME-SRC ***/
  switch (action.type) {
    case (FRAME_MODIFY_CHECKBOX):
      const frame1 = updateChecked(state, data, 'frameGeneral');

      if (frame1.currentObj.name === data.name) {
        return { ...state, frameGeneral: frame1.clonedData };
      } else {
        console.log('ERROR IN DATA BEING UPDATED');
      }

    case (FRAME_MODIFY_URL):
      const frame2 = updateUrl(state, data, 'frameCustom');
      return { ...state, frameCustom: frame2.clonedData };

    case (FRAME_ADD_EMPTY_URL):
      const frame3 = addUrl(state, 'frameCustom');
      return { ...state, frameCustom: frame3 };

    case (FRAME_DELETE_URL):
      const frame4 = deleteUrl(state, data, 'frameCustom');
      return { ...state, frameCustom: frame4.clonedData };
  }

  /**** FONT-SRC ***/
  switch (action.type) {
    case (FONT_MODIFY_CHECKBOX):
      const font1 = updateChecked(state, data, 'fontGeneral');

      if (font1.currentObj.name === data.name) {
        return { ...state, fontGeneral: font1.clonedData };
      } else {
        console.log('ERROR IN DATA BEING UPDATED');
      }

    case (FONT_MODIFY_URL):
      const font2 = updateUrl(state, data, 'fontCustom');
      return { ...state, fontCustom: font2.clonedData };

    case (FONT_ADD_EMPTY_URL):
      const font3 = addUrl(state, 'fontCustom');
      return { ...state, fontCustom: font3 };

    case (FONT_DELETE_URL):
      const font4 = deleteUrl(state, data, 'fontCustom');
      return { ...state, fontCustom: font4.clonedData };
  }

  return state;

};
