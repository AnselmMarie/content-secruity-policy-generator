/* Node Module */
import { cloneDeep } from 'lodash';
/* Modules */
import {
  updateChecked,
  updateUrl,
  addUrl,
  deleteUrl,
} from '../../modules/redux.helper.module';
/* CSP Content */
import cspState from './csp.state';
import {
  DEFAULT_MODIFY_CHECKBOX,
  DEFAULT_MODIFY_URL,
  DEFAULT_ADD_EMPTY_URL,
  DEFAULT_ADD_URL,
  DEFAULT_DELETE_URL,
  IMG_MODIFY_CHECKBOX,
  IMG_MODIFY_URL,
  IMG_ADD_EMPTY_URL,
  IMG_ADD_URL,
  IMG_DELETE_URL,
  STYLE_MODIFY_CHECKBOX,
  STYLE_MODIFY_URL,
  STYLE_ADD_EMPTY_URL,
  STYLE_ADD_URL,
  STYLE_DELETE_URL,
  SCRIPT_MODIFY_CHECKBOX,
  SCRIPT_MODIFY_URL,
  SCRIPT_ADD_EMPTY_URL,
  SCRIPT_ADD_URL,
  SCRIPT_DELETE_URL,
  FRAME_MODIFY_CHECKBOX,
  FRAME_MODIFY_URL,
  FRAME_ADD_EMPTY_URL,
  FRAME_ADD_URL,
  FRAME_DELETE_URL,
  FONT_MODIFY_CHECKBOX,
  FONT_MODIFY_URL,
  FONT_ADD_EMPTY_URL,
  FONT_ADD_URL,
  FONT_DELETE_URL,
  OBJECT_MODIFY_CHECKBOX,
  OBJECT_MODIFY_URL,
  OBJECT_ADD_EMPTY_URL,
  OBJECT_ADD_URL,
  OBJECT_DELETE_URL,
  RESET_DATA,
} from './csp.constants';
import { CspActionTypes, ICspState } from './csp.type';

/**
 * @property initState
 * @desc init state of the the csp reducer
 */
const initState: ICspState = cspState;

/**
 * @property resetData
 * @desc clone version of the initState for resetting purposes
 */
const resetData = cloneDeep(initState);

/**
 * @function CSP Reducer
 * @desc This will update the csp store
 * @param state = initState - this will be used to update the state on the first run
 * @param action - the object that was initiated by the action
 */
export default (state = initState, action: CspActionTypes): ICspState => {
  const data = action.data;
  /**** DEFAULT-SRC ***/
  switch (action.type) {
    case DEFAULT_MODIFY_CHECKBOX:
      const default1 = updateChecked(state, data, 'defaultGeneral');
      if (default1.clonedData) {
        return { ...state, defaultGeneral: default1.clonedData };
      }
      break;

    case DEFAULT_MODIFY_URL:
      const default2 = updateUrl(state, data, 'defaultCustom');
      if (default2.clonedData) {
        return { ...state, defaultCustom: default2.clonedData };
      }
      break;

    case DEFAULT_ADD_EMPTY_URL:
      const default3 = addUrl(state, null, 'defaultCustom');
      if (default3) {
        return { ...state, defaultCustom: default3 };
      }
      break;

    case DEFAULT_ADD_URL:
      const url = data && data.url;
      const default4 = addUrl(state, url, 'defaultCustom');
      if (default4) {
        return { ...state, defaultCustom: default4 };
      }
      break;

    case DEFAULT_DELETE_URL:
      const default5 = deleteUrl(state, data, 'defaultCustom');
      if (default5.clonedData) {
        return { ...state, defaultCustom: default5.clonedData };
      }
      break;
  }

  /**** IMG-SRC ***/
  switch (action.type) {
    case IMG_MODIFY_CHECKBOX:
      const img1 = updateChecked(state, data, 'imgGeneral');
      if (img1.clonedData) {
        return { ...state, imgGeneral: img1.clonedData };
      }
      break;

    case IMG_MODIFY_URL:
      const img2 = updateUrl(state, data, 'imgCustom');
      if (img2.clonedData) {
        return { ...state, imgCustom: img2.clonedData };
      }

    case IMG_ADD_EMPTY_URL:
      const img3 = addUrl(state, null, 'imgCustom');
      if (img3) {
        return { ...state, imgCustom: img3 };
      }
      break;

    case IMG_ADD_URL:
      const url = data && data.url;
      const img4 = addUrl(state, url, 'imgCustom');
      if (img4) {
        return { ...state, imgCustom: img4 };
      }
      break;

    case IMG_DELETE_URL:
      const img5 = deleteUrl(state, data, 'imgCustom');
      if (img5.clonedData) {
        return { ...state, imgCustom: img5.clonedData };
      }
      break;
  }

  /**** STYLE-SRC ***/
  switch (action.type) {
    case STYLE_MODIFY_CHECKBOX:
      const style1 = updateChecked(state, data, 'styleGeneral');
      if (style1.clonedData) {
        return { ...state, styleGeneral: style1.clonedData };
      }
      break;

    case STYLE_MODIFY_URL:
      const style2 = updateUrl(state, data, 'styleCustom');
      if (style2.clonedData) {
        return { ...state, styleCustom: style2.clonedData };
      }
      break;

    case STYLE_ADD_EMPTY_URL:
      const style3 = addUrl(state, null, 'styleCustom');
      if (style3) {
        return { ...state, styleCustom: style3 };
      }
      break;

    case STYLE_ADD_URL:
      const url = data && data.url;
      const style4 = addUrl(state, url, 'styleCustom');
      if (style4) {
        return { ...state, styleCustom: style4 };
      }
      break;

    case STYLE_DELETE_URL:
      const style5 = deleteUrl(state, data, 'styleCustom');
      if (style5.clonedData) {
        return { ...state, styleCustom: style5.clonedData };
      }
      break;
  }

  /**** SCRIPT-SRC ***/
  switch (action.type) {
    case SCRIPT_MODIFY_CHECKBOX:
      const script1 = updateChecked(state, data, 'scriptGeneral');
      if (script1.clonedData) {
        return { ...state, scriptGeneral: script1.clonedData };
      }
      break;

    case SCRIPT_MODIFY_URL:
      const script2 = updateUrl(state, data, 'scriptCustom');
      if (script2.clonedData) {
        return { ...state, scriptCustom: script2.clonedData };
      }
      break;

    case SCRIPT_ADD_EMPTY_URL:
      const script3 = addUrl(state, null, 'scriptCustom');
      if (script3) {
        return { ...state, scriptCustom: script3 };
      }
      break;

    case SCRIPT_ADD_URL:
      const url = data && data.url;
      const script4 = addUrl(state, url, 'scriptCustom');
      if (script4) {
        return { ...state, scriptCustom: script4 };
      }

    case SCRIPT_DELETE_URL:
      const script5 = deleteUrl(state, data, 'scriptCustom');
      return { ...state, scriptCustom: script5.clonedData };
  }

  /**** FRAME-SRC ***/
  switch (action.type) {
    case FRAME_MODIFY_CHECKBOX:
      const frame1 = updateChecked(state, data, 'frameGeneral');
      if (frame1.clonedData) {
        return { ...state, frameGeneral: frame1.clonedData };
      }
      break;

    case FRAME_MODIFY_URL:
      const frame2 = updateUrl(state, data, 'frameCustom');
      if (frame2.clonedData) {
        return { ...state, frameCustom: frame2.clonedData };
      }
      break;

    case FRAME_ADD_EMPTY_URL:
      const frame3 = addUrl(state, null, 'frameCustom');
      if (frame3) {
        return { ...state, frameCustom: frame3 };
      }
      break;

    case FRAME_ADD_URL:
      const url = data && data.url;
      const frame4 = addUrl(state, url, 'frameCustom');
      if (frame4) {
        return { ...state, frameCustom: frame4 };
      }
      break;

    case FRAME_DELETE_URL:
      const frame5 = deleteUrl(state, data, 'frameCustom');
      if (frame5.clonedData) {
        return { ...state, frameCustom: frame5.clonedData };
      }
      break;
  }

  /**** FONT-SRC ***/
  switch (action.type) {
    case FONT_MODIFY_CHECKBOX:
      const font1 = updateChecked(state, data, 'fontGeneral');
      if (font1) {
        return { ...state, fontGeneral: font1.clonedData };
      }
      break;

    case FONT_MODIFY_URL:
      const font2 = updateUrl(state, data, 'fontCustom');
      if (font2.clonedData) {
        return { ...state, fontCustom: font2.clonedData };
      }
      break;

    case FONT_ADD_EMPTY_URL:
      const font3 = addUrl(state, null, 'fontCustom');
      if (font3) {
        return { ...state, fontCustom: font3 };
      }
      break;

    case FONT_ADD_URL:
      const url = data && data.url;
      const font4 = addUrl(state, url, 'fontCustom');
      if (font4) {
        return { ...state, fontCustom: font4 };
      }
      break;

    case FONT_DELETE_URL:
      const font5 = deleteUrl(state, data, 'fontCustom');
      if (font5.clonedData) {
        return { ...state, fontCustom: font5.clonedData };
      }
      break;
  }

  /**** OBJECT-SRC ***/
  switch (action.type) {
    case OBJECT_MODIFY_CHECKBOX:
      const font1 = updateChecked(state, data, 'objectGeneral');
      if (font1.clonedData) {
        return { ...state, objectGeneral: font1.clonedData };
      }
      break;

    case OBJECT_MODIFY_URL:
      const font2 = updateUrl(state, data, 'objectCustom');
      if (font2.clonedData) {
        return { ...state, objectCustom: font2.clonedData };
      }
      break;

    case OBJECT_ADD_EMPTY_URL:
      const font3 = addUrl(state, null, 'objectCustom');
      if (font3) {
        return { ...state, objectCustom: font3 };
      }
      break;

    case OBJECT_ADD_URL:
      const url = data && data.url;
      const font4 = addUrl(state, url, 'objectCustom');
      if (font4) {
        return { ...state, objectCustom: font4 };
      }
      break;

    case OBJECT_DELETE_URL:
      const font5 = deleteUrl(state, data, 'objectCustom');
      if (font5.clonedData) {
        return { ...state, objectCustom: font5.clonedData };
      }
      break;
  }

  /**** OTHER ***/
  switch (action.type) {
    case RESET_DATA:
      return cloneDeep(resetData);
  }

  return state;
};
