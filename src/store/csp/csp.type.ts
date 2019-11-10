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
} from './csp.constants';

export interface ICspState {
  defaultGeneral: generalData[];
  defaultCustom: string[];
  imgGeneral: generalData[];
  imgCustom: string[];
  styleGeneral: generalData[];
  styleCustom: string[];
  scriptGeneral: generalData[];
  scriptCustom: string[];
  frameGeneral: generalData[];
  frameCustom: string[];
  fontGeneral: generalData[];
  fontCustom: string[];
}

interface generalData {
  name: string;
  val: string;
  checked: boolean;
}

export interface IUrlData_AC {
  index?: number;
  url?: string;
}

export interface ICheckboxData_AC {
  index: number | void;
  name: string;
}

export interface IUpdateCheckbox_AC {
  type: typeof DEFAULT_MODIFY_CHECKBOX | typeof IMG_MODIFY_CHECKBOX |
        typeof STYLE_MODIFY_CHECKBOX | typeof SCRIPT_MODIFY_CHECKBOX |
        typeof FRAME_MODIFY_CHECKBOX | typeof FONT_MODIFY_CHECKBOX;
  data: ICheckboxData_AC;
}

export interface IUpdateModifyUrl_AC {
  type: typeof DEFAULT_MODIFY_URL | typeof IMG_MODIFY_URL |
        typeof STYLE_MODIFY_URL | typeof SCRIPT_MODIFY_URL |
        typeof FRAME_MODIFY_URL | typeof FONT_MODIFY_URL;
  data: IUrlData_AC;
}

export interface IUpdateEmptyUrl_AC {
  type: typeof DEFAULT_ADD_EMPTY_URL | typeof IMG_ADD_EMPTY_URL |
        typeof STYLE_ADD_EMPTY_URL | typeof SCRIPT_ADD_EMPTY_URL |
        typeof FRAME_ADD_EMPTY_URL | typeof FONT_ADD_EMPTY_URL;
  data?: any;
}

export interface IUpdateAddUrl_AC {
  type: typeof DEFAULT_ADD_URL | typeof IMG_ADD_URL |
        typeof STYLE_ADD_URL | typeof SCRIPT_ADD_URL |
        typeof FRAME_ADD_URL | typeof FONT_ADD_URL;
  data: IUrlData_AC;
}

export interface IUpdateDeleteUrl_AC {
  type: typeof DEFAULT_DELETE_URL | typeof IMG_DELETE_URL |
        typeof STYLE_DELETE_URL | typeof SCRIPT_DELETE_URL |
        typeof FRAME_DELETE_URL | typeof FONT_DELETE_URL;
  data: IUrlData_AC;
}

export interface IUpdateResetData_AC {
  type: typeof RESET_DATA;
  data?: any,
}

export interface ICspFtn_AC {
  addEmptyUrl_AC: (type: string) => void,
  deleteUrl_AC: (type: string, data: IUrlData_AC) => void,
  modifyUrl_AC: (type: string, data: IUrlData_AC) => void,
  addUrl_AC: (type: string, data: IUrlData_AC) => void,
  modifyCheckbox_AC: (type: string, data: ICheckboxData_AC) => void,
  resetData_AC: () => void,
}

export type CspActionTypes = IUpdateCheckbox_AC | IUpdateModifyUrl_AC | IUpdateEmptyUrl_AC | IUpdateAddUrl_AC | IUpdateDeleteUrl_AC | IUpdateResetData_AC;
