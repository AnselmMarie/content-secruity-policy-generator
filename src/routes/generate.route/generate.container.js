/* Node Module */
import React from 'react';
import { cloneDeep } from 'lodash';
/* Route Content */
import GenerateView from './generate.view';
import { generateState } from './generate.state';

class GenerateContainer extends React.Component {

  state = generateState;

  /**
   * @property {object} tempCSP
   * @desc temporary holds the csp data
   * @author Anselm Marie
   */
  tempCSP = cloneDeep(this.props.cspData);

  componentDidMount() {
    // loader dispatch
    this.iterateMainData();
  }

  /**
   * @function iterateMainData
   * @desc iterating the csp data to start the progress of forming the data
   * @author Anselm Marie
   */
  iterateMainData = () => {
    Object.entries(this.tempCSP).forEach(([key, val]) => {

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
   * @author Anselm Marie
   * @param {array} key - src name
   */
  getSrcData = (key) => {
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
   * @author Anselm Marie
   * @param {array} data - content for current general src
   * @param {string} srcData - the src data based on the current data given
   */
  iterateGeneralData = (data, srcData) => {
    let currentData = srcData.data;

    data.forEach((el) => {
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
   * @param {array} data - content for current custom src
   * @param {string} srcData - the src data based on the current data given
   */
  iterateCustomData = (data, srcData) => {
    let currentData = srcData.data;

    data.forEach((el) => {
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
   * @author Anselm Marie
   * @param {array} data - content for current custom src
   * @param {string} srcData - the src data based on the current data given
   */
  createCspGenerateData = () => {
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

    console.log('dataLoop', dataLoop);

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
    console.log('this.state', this.state);
    console.log('------------');
    return GenerateView(this);
  }

}

export default GenerateContainer;
