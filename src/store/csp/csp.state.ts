/* State Data */
import defaultState from './csp.state.default';
import imgState from './csp.state.img';
import styleState from './csp.state.style';
import scriptState from './csp.state.script';
import frameState from './csp.state.frame';
import fontState from './csp.state.font';
import objectState from './csp.state.object';

/**
 * @property initState
 * @desc The default state of the csp reducer
 */
const initState = {
  defaultGeneral: defaultState.generalData,
  defaultCustom: defaultState.customData,
  imgGeneral: imgState.generalData,
  imgCustom: imgState.customData,
  styleGeneral: styleState.generalData,
  styleCustom: styleState.customData,
  scriptGeneral: scriptState.generalData,
  scriptCustom: scriptState.customData,
  frameGeneral: frameState.generalData,
  frameCustom: frameState.customData,
  fontGeneral: fontState.generalData,
  fontCustom: fontState.customData,
  objectGeneral: objectState.generalData,
  objectCustom: objectState.customData,
}

export default initState;
