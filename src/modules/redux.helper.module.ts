/* Node Module */
import { cloneDeep } from 'lodash';
/* Store Content */
import { ICspState } from '../store/csp/csp.type';
/* Module Content */
import {
  TCheckboxObject,
  TUrlObject,
  TData,
  TUrl,
} from './redux.helper.type';

/**
 * @function updateChecked
 * @desc update the check data
 * @param state = the current state of this store
 * @param data - data send from action creator
 * @param dataOfInterest - the data that needs to be checked
 */
export const updateChecked = (state: ICspState, data: TData, dataOfInterest: string): TCheckboxObject => {
  const currentObj = state[dataOfInterest][data.index];
  let clonedData = cloneDeep(state[dataOfInterest]);
  clonedData[data.index].checked = !clonedData[data.index].checked;

  return {
    currentObj,
    clonedData
  }
}

/**
 * @function updateUrl
 * @desc update url content
 * @param state = the current state of this store
 * @param data - data send from action creator
 * @param dataOfInterest - the data that needs to be checked
 */
export const updateUrl = (state: ICspState, data: TUrl, dataOfInterest: string): TUrlObject => {
  const currentObj = state[dataOfInterest][data.index];
  let clonedData = cloneDeep(state[dataOfInterest]);
  clonedData[data.index] = data.url;

  return {
    currentObj,
    clonedData
  }
}

/**
 * @function addUrl
 * @desc add url content
 * @param state = the current state of this store
 * @param url - the url that needs to be added
 * @param dataOfInterest - the data that needs to be checked
 */
export const addUrl = (state: ICspState, url: string, dataOfInterest: string): string[] => {

  let clonedData = cloneDeep(state[dataOfInterest]);
  let currentLength;

  if (clonedData[0] === '' && url) {
    currentLength = 0;
  } else {
    currentLength = clonedData.length === 0 ? 1 : clonedData.length;
  }
  clonedData[currentLength] = url ? url : '';

  return clonedData;
}

/**
 * @function deleteUrl
 * @desc delete url content
 * @param state = the current state of this store
 * @param data - data send from action creator
 * @param dataOfInterest - the data that needs to be checked
 */
export const deleteUrl = (state: ICspState, data: TUrl, dataOfInterest: string): TUrlObject => {
  const currentObj = state[dataOfInterest][data.index];
  let clonedData = cloneDeep(state[dataOfInterest]);
  clonedData = clonedData.filter((el: string, i: number) => i !== data.index);

  return {
    currentObj,
    clonedData
  }
}
