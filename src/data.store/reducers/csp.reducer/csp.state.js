/* State Data */
import defaultState from './csp.state.default';
import imgState from './csp.state.img';
import styleState from './csp.state.style';
import scriptState from './csp.state.script';
import frameState from './csp.state.frame';
import fontState from './csp.state.font';

/**
 * @property initState
 * @desc The default state of the csp reducer
 * @author Anselm Marie
 */
const initState = {
  default: defaultState,
  img: imgState,
  style: styleState,
  script: scriptState,
  frame: frameState,
  font: fontState,
}

export default initState;
