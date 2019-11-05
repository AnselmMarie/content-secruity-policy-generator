import {
  DEFAULT_SRC,
  IMG_SRC,
  STYLE_SRC,
  SCRIPT_SRC,
  FRAME_SRC,
  FONT_SRC,
} from '../data.store/actions/action.constants';

/**
 * @function importData
 * @desc render the checkbox url view
 * @author Anselm Marie
 * @param {string} inputData - input data
 * @param {object} props - parent information data
 */
export const importData = (inputData, props) => {
  const srcSplit = inputData.split(';');

  srcSplit.forEach((el, i) => {

    const itemSplit = el.split(' ');
    const length = itemSplit.length;
    let currentSrc = null;

    for (let loop = 0; loop < length; loop++) {

      console.log('loop', loop);

      // Update the current src during the first loop
      if (!currentSrc) {
        currentSrc = checkSrcType(itemSplit[loop]);
      }

      // If currentSrc variable exist run code to update content to the store
      if (currentSrc) {
        storeData(currentSrc, itemSplit[loop], props);
      }

      // When the loop ends then reset the currentSrc variable for the next loop
      if (loop === length) {
        currentSrc = null;
      }

    }

  });

  console.log('cspData', props.cspData);

}

/**
 * @function checkSrcType
 * @desc get the correct src type
 * @author Anselm Marie
 * @param {string} srcType - src string
 * @param {object} props - parent information data
 * @return {string}
 */
const checkSrcType = (srcType) => {

  switch (srcType) {
    case 'default-src':
      return DEFAULT_SRC;
    case 'img-src':
      return IMG_SRC;
    case 'style-src':
      return STYLE_SRC;
    case 'script-src':
      return SCRIPT_SRC;
    case 'frame-src':
      return FRAME_SRC;
    case 'font-src':
      return FONT_SRC;
    default:
      return null;
  }

}

/**
 * @function storeData
 * @desc store data based on type of data
 * @author Anselm Marie
 * @param {string} el - element from the csp src
 * @param {object} props - parent information data
 */
const storeData = (currentSrc, el, props) => {

  if (el.includes('http')) {
    props.modifyCheckbox_AC(currentSrc, {
      index: '',
      name: el,
    });

  } else if (el.includes('"') || el.includes('data') || el.includes("'")) {
    props.addUrl_AC(currentSrc, {
      name: el,
    });
  }

}
