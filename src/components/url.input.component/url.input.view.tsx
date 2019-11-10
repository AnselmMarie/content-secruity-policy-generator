/* Node Module */
import React from 'react';
/* Component Content */
import { IUrlInputProps } from './url.input.type';

/**
 * @property theNextSplit
 * @desc when the next split
 */
let theNextSplit: number = 3;

/**
 * @property rowSplit
 * @desc a total of a row
 */
let rowSplit: number = 3;

/**
 * @property dataLength
 * @desc the data length
 */
let dataLength: number|null = null;

/**
 * @function sendDispatchModify
 * @desc This will update the csp store
 * @param e - event object of element
 * @param props - content from the parent component
 */
const sendDispatchModify = (e: React.ChangeEvent<HTMLButtonElement>, props: IUrlInputProps): void => {
  const urlData = { index: props.i, url: e.currentTarget.value };
  props.modifyUrl_AC(props.type, urlData);
}

/**
 * @function sendDispatchDelete
 * @desc This will delete a string in the csp store
 * @param props - content from the parent component
 */
const sendDispatchDelete = (props: IUrlInputProps): void => {
  const urlData = { index: props.i };
  props.deleteUrl_AC(props.type, urlData);
}

/**
 * @function columnCheck
 * @desc This will delete a string in the csp store
 * @param i - index of data
 * @param customData - index of data
 */
const columnCheck = (i: number, customData: string[]): boolean => {

  i = i + 1;

  let addSplit = false;

  if (!dataLength) {
    dataLength = customData.length;
  }

  if (i === theNextSplit) {
    addSplit = true;
    theNextSplit = theNextSplit + rowSplit;
  }

  if (i === dataLength) {
    dataLength = null;
    theNextSplit = rowSplit;
  }

  return addSplit;

}

/**
 * @function Url Input View
 * @desc render the url input view
 * @param props - content from the parent component
 */
export default (props: IUrlInputProps): JSX.Element => {
  return (
    <>

      <div className="column-custom">
        <input type="input" id={props.inputName} className="form-control" name={props.inputName} onChange={(e) => sendDispatchModify(e, props)} />
        <span role="button" className="delete-button" onClick={() => sendDispatchDelete(props)}>x</span>
      </div>
      {columnCheck(props.i, props.customData) && <hr />}

    </>
  )
};