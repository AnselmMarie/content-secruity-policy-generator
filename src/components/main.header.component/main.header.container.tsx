/* Node Module */
import React from 'react';
/* Component Content */
import { mainHeaderMessage, mainHeaderState }from './main.header.state';
import MainHeaderView from './main.header.view';
/* Store */
import {
  DEFAULT_SRC,
  IMG_SRC,
  STYLE_SRC,
  SCRIPT_SRC,
  FRAME_SRC,
  FONT_SRC,
} from '../../store/csp/csp.constants';
/* Config */
import generalDataEnum from '../../configs/enum/general.data.enum';
import { IGeneralDataType } from '../../configs/enum/general.data.type';
/* Component Content */
import { IMainHeaderProps, IMainHeaderState } from './main.header.type';

const generalDataEnumData: IGeneralDataType[] = generalDataEnum;

class MainHeaderContainer extends React.Component<IMainHeaderProps, IMainHeaderState> {

  /**
   * @prop {object} state
   * @desc state data
   * @memberOf MainHeaderContainer
  */
  state = {
    ...mainHeaderState,
    ...mainHeaderMessage,
  }

  /**
   * @function getImportStatus
   * @desc changes class name based on import status
   * @memberOf MainHeaderContainer
   * @param importCompleted - if import status was already done
   */
  getImportStatus = (importCompleted: boolean): string => {
    return importCompleted ? 'csp-reset-progress' : 'csp-start-progress';
  }

  /**
   * @function checkStatus
   * @desc render the checkbox url view
   * @memberOf MainHeaderContainer
   * @param {object} e - event from the submit
   */
  checkStatus = (e: React.ChangeEvent<any>): void => {
    e.preventDefault();

    this.props.showLoader_AC();
    const inputData = e.target.elements.cspBreakdownTextArea.value;

    // If data doesn't exist display error
    if (!inputData) {
      alert('hi');
      this.props.hideLoader_AC();
      return;
    }

    this.importData(inputData);

  }

    /**
   * @function updateCheckbox
   * @desc render the checkbox url view
   * @memberOf MainHeaderContainer
   */
  updateCheckbox = (): void => {
    let checkbox = this.state.reImportCheckbox;
    checkbox.checked = !checkbox.checked;

    this.setState({
      reImportCheckbox: checkbox,
    });
  }

  /**
   * @function importData
   * @desc render the checkbox url view
   * @memberOf MainHeaderContainer
   * @param inputData - input data
   */
  importData = (inputData: string): void => {

    this.props.resetData_AC();

    const srcSplit = inputData.split(';');
    let isSuccess = false;

    srcSplit.forEach((el) => {

      const itemSplit = el.split(' ');
      const length = itemSplit.length;
      let currentSrc = null;

      for (let loop = 0; loop < length; loop++) {

        // Update the current src during the first loop
        if (!currentSrc) {
          currentSrc = this.checkSrcType(itemSplit[loop]);
        }

        // If currentSrc variable exist run code to update content to the store
        if (currentSrc) {
          this.storeData(currentSrc, itemSplit[loop]);
          isSuccess = true;
        }

        // When the loop ends then reset the currentSrc variable for the next loop
        if (loop === length) {
          currentSrc = null;
        }

      }

    });

    // Display Error is not successfully
    if (!isSuccess) {
      alert('no success');
    }

    // Update Store and display success message
    if (isSuccess) {
      this.setState({
        importCompleted: true,
        inputData: '',
      });
    }

    this.props.hideLoader_AC();

  }

  /**
   * @function checkSrcType
   * @desc get the correct src type
   * @memberOf MainHeaderContainer
   * @param srcType - src string
   */
  checkSrcType = (srcType: string): string => {

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
   * @memberOf MainHeaderContainer
   * @param currentSrc - current '-src'
   * @param el - element from the csp src
   */
  storeData = (currentSrc: string, el: string): void => {

    if (el.includes('http')) {
      this.props.addUrl_AC(currentSrc, {
        url: el,
      });

    } else if (el.includes('"') || el.includes('data') || el.includes("'")) {
      el = el
            .replace(new RegExp('"', 'g'), '')
            .replace(new RegExp("'", 'g'), '');

      this.props.modifyCheckbox_AC(currentSrc, {
        index: this.getIndex(el),
        name: el,
      });
    }

  }

  /**
   * @function getIndex
   * @desc get the correct index for the current data
   * @memberOf MainHeaderContainer
   * @param el - element from the csp src
   */
  getIndex = (el: string): number|void => {

    const length = generalDataEnumData.length;

    for (let loop = 0; loop < length; loop++) {
      if (el === generalDataEnumData[loop].val) {
        return loop;
      }
    }

  };

  /**
   * @function render
   * @desc renders the component view
   * @memberOf MainHeaderContainer
  */
  render() {
    return MainHeaderView(this);
  }

}

export default MainHeaderContainer;
