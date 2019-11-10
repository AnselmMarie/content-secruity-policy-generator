/* Node Module */
import React from 'react';
/* Route Content */
import GenerateView from './generate.view';
import { generateState } from './generate.state';
import {
  IGenerateProps,
  TGenerateState,
  TSrcData,
} from './generate.type';
/* Config */
import { TGlobalCheckbox } from 'configs/types/global.type';

class GenerateContainer extends React.Component<IGenerateProps, TGenerateState> {

  state = generateState;

  /**
   * @property {object} tempCSP
   * @desc temporary holds the csp data
   * @author Anselm Marie
   */
  tempCSP = {
    defaultData: '',
    fontData: '',
    frameData: '',
    imgData: '',
    scriptData: '',
    styleData: '',
  }

  componentDidMount() {
    // loader dispatch
    this.iterateMainData();
  }

  /**
   * @function iterateMainData
   * @desc iterating the csp data to start the progress of forming the data
   */
  iterateMainData = (): void => {
    Object.entries(this.props.cspData).forEach(([key, val]) => {

      let srcData;

      if (key.includes('General') || key.includes('Custom')) {
        srcData = this.getSrcData(key);
      }

      if (key.includes('General') && srcData) {
        this.iterateGeneralData(val, srcData);

      } else if (key.includes('Custom') && srcData) {
        this.iterateCustomData(val, srcData);

      } else {
        console.log('This set of data is not valid!');
      }

    });

    this.createCspGenerateData();

  }

  /**
   * @function getSrcData
   * @desc getting the src data based on the key provided
   * @param key - src name
   */
  getSrcData = (key: string): TSrcData => {
    switch (key) {
      case 'defaultGeneral':
      case 'defaultCustom':
        return {
          data: this.tempCSP.defaultData,
          name: 'defaultData',
        }

      case 'imgGeneral':
      case 'imgCustom':
        return {
          data: this.tempCSP.imgData,
          name: 'imgData',
        }

      case 'styleGeneral':
      case 'styleCustom':
        return {
          data: this.tempCSP.styleData,
          name: 'styleData',
        }

      case 'scriptGeneral':
      case 'scriptCustom':
        return {
          data: this.tempCSP.scriptData,
          name: 'scriptData',
        }

      case 'frameGeneral':
      case 'frameCustom':
        return {
          data: this.tempCSP.frameData,
          name: 'frameData',
        }

      case 'fontGeneral':
      case 'fontCustom':
        return {
          data: this.tempCSP.fontData,
          name: 'fontData',
        }

      default:
        return null;
    }
  }

  /**
   * @function iterateGeneralData
   * @desc iterating the general data to use data that was checked
   * @param data - content for current general src
   * @param srcData - the src data based on the current data given
   */
  iterateGeneralData = (data: TGlobalCheckbox[], srcData: TSrcData): void => {
    let currentData = srcData.data;

    data.forEach((el: TGlobalCheckbox) => {
      if (el.checked) {

        let val;
        if (el.val.includes('data')) {
          val = `${el.val}`;
        } else {
          val = `'${el.val}'`;
        }

        if (!currentData) {
          currentData = `${val}`;
        } else {
          currentData = `${currentData} ${val}`;
        }

      }
    });

    if (currentData) {
      this.tempCSP[srcData.name] = currentData;
    }
  }

  /**
   * @function iterateCustomData
   * @desc iterating all the urls in one string
   * @author Anselm Marie
   * @param data - content for current custom src
   * @param srcData - the src data based on the current data given
   */
  iterateCustomData = (data: string[], srcData: TSrcData) => {
    let currentData = srcData.data;

    data.forEach((el: string) => {
      if (el) {
        if (!currentData) {
          currentData = `${el}`;
        } else {
          currentData = `${currentData} ${el}`;
        }
      }
    });

    if (!currentData) {
      this.tempCSP[srcData.name] = null;

    } else {
      this.tempCSP[srcData.name] = currentData;
    }
  }

  /**
   * @function createCspGenerateData
   * @desc iterating all the urls in one string
   */
  createCspGenerateData = (): void => {
    let cspString = '';
    const dataLoop = [
      {
        data: this.tempCSP.defaultData,
        name: 'default-src',
      },
      {
        data: this.tempCSP.imgData,
        name: 'img-src',
      },
      {
        data: this.tempCSP.styleData,
        name: 'style-src',
      },
      {
        data: this.tempCSP.scriptData,
        name: 'script-src',
      },
      {
        data: this.tempCSP.frameData,
        name: 'frame-src',
      },
      {
        data: this.tempCSP.fontData,
        name: 'font-src',
      }
    ];

    dataLoop.forEach((el) => {

      const currentData = `${el.name} ${el.data}`;

      if (el.name === 'default-src') {
        cspString = `${currentData}`;
      } else {
        cspString = `${cspString} ${currentData}`;
      }

    });

    this.setState({
      cspGenerate: cspString,
      ...this.tempCSP,
    })

  }

  render() {
    return GenerateView(this);
  }

}

export default GenerateContainer;
