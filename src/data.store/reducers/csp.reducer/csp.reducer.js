/* Node Module */
import { cloneDeep } from 'lodash';
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
  RESET_DATA,
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

const resetData = cloneDeep(initState);

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
      return { ...state, defaultGeneral: default1.clonedData };

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
      return { ...state, imgGeneral: img1.clonedData };

    case (IMG_MODIFY_URL):
      const img2 = updateUrl(state, data, 'imgCustom');
      return { ...state, imgCustom: img2.clonedData };

    case (IMG_ADD_EMPTY_URL):
      const img3 = addUrl(state, null, 'imgCustom');
      return { ...state, imgCustom: img3 };

    case (IMG_ADD_URL):
      const url = data && data.url;
      const img4 = addUrl(state, url, 'imgCustom');
      return { ...state, imgCustom: img4 };

    case (IMG_DELETE_URL):
      const img5 = deleteUrl(state, data, 'imgCustom');
      return { ...state, imgCustom: img5.clonedData };
  }

  /**** STYLE-SRC ***/
  switch (action.type) {
    case (STYLE_MODIFY_CHECKBOX):
      const style1 = updateChecked(state, data, 'styleGeneral');
      return { ...state, styleGeneral: style1.clonedData };

    case (STYLE_MODIFY_URL):
      const style2 = updateUrl(state, data, 'styleCustom');
      return { ...state, styleCustom: style2.clonedData };

    case (STYLE_ADD_EMPTY_URL):
      const style3 = addUrl(state, null, 'styleCustom');
      return { ...state, styleCustom: style3 };

    case (STYLE_ADD_URL):
      const url = data && data.url;
      const style4 = addUrl(state, url, 'styleCustom');
      return { ...state, styleCustom: style4 };

    case (STYLE_DELETE_URL):
      const style5 = deleteUrl(state, data, 'styleCustom');
      return { ...state, styleCustom: style5.clonedData };
  }

  /**** SCRIPT-SRC ***/
  switch (action.type) {
    case (SCRIPT_MODIFY_CHECKBOX):
      const script1 = updateChecked(state, data, 'scriptGeneral');
      return { ...state, scriptGeneral: script1.clonedData };

    case (SCRIPT_MODIFY_URL):
      const script2 = updateUrl(state, data, 'scriptCustom');
      return { ...state, scriptCustom: script2.clonedData };

    case (SCRIPT_ADD_EMPTY_URL):
      const script3 = addUrl(state, null, 'scriptCustom');
      return { ...state, scriptCustom: script3 };

    case (SCRIPT_ADD_URL):
      const url = data && data.url;
      const script4 = addUrl(state, url, 'scriptCustom');
      return { ...state, scriptCustom: script4 };

    case (SCRIPT_DELETE_URL):
      const script5 = deleteUrl(state, data, 'scriptCustom');
      return { ...state, scriptCustom: script5.clonedData };
  }

  /**** FRAME-SRC ***/
  switch (action.type) {
    case (FRAME_MODIFY_CHECKBOX):
      const frame1 = updateChecked(state, data, 'frameGeneral');
      return { ...state, frameGeneral: frame1.clonedData };

    case (FRAME_MODIFY_URL):
      const frame2 = updateUrl(state, data, 'frameCustom');
      return { ...state, frameCustom: frame2.clonedData };

    case (FRAME_ADD_EMPTY_URL):
      const frame3 = addUrl(state, null, 'frameCustom');
      return { ...state, frameCustom: frame3 };

    case (FRAME_ADD_URL):
      const url = data && data.url;
      const frame4 = addUrl(state, url, 'frameCustom');
      return { ...state, frameCustom: frame4 };

    case (FRAME_DELETE_URL):
      const frame5 = deleteUrl(state, data, 'frameCustom');
      return { ...state, frameCustom: frame5.clonedData };
  }

  /**** FONT-SRC ***/
  switch (action.type) {
    case (FONT_MODIFY_CHECKBOX):
      const font1 = updateChecked(state, data, 'fontGeneral');
      return { ...state, fontGeneral: font1.clonedData };

    case (FONT_MODIFY_URL):
      const font2 = updateUrl(state, data, 'fontCustom');
      return { ...state, fontCustom: font2.clonedData };

    case (FONT_ADD_EMPTY_URL):
      const font3 = addUrl(state, null, 'fontCustom');
      return { ...state, fontCustom: font3 };

    case (FONT_ADD_URL):
      const url = data && data.url;
      const font4 = addUrl(state, url, 'fontCustom');
      return { ...state, fontCustom: font4 };

    case (FONT_DELETE_URL):
      const font5 = deleteUrl(state, data, 'fontCustom');
      return { ...state, fontCustom: font5.clonedData };
  }

  /**** OTHER ***/
  switch (action.type) {
    case (RESET_DATA):
      return cloneDeep(resetData);
  }

  return state;

};
