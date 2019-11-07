import React from 'react';

/**
 * @property theNextSplit
 * @desc when the next split
 * @author Anselm Marie
 * @return {number}
 */
let theNextSplit = 3;

/**
 * @property rowSplit
 * @desc a total of a row
 * @author Anselm Marie
 * @return {number}
 */
let rowSplit = 3;

/**
 * @property dataLength
 * @desc the data length
 * @author Anselm Marie
 * @return {number}
 */
let dataLength = null;

/**
 * @function sendDispatchModify
 * @desc This will update the csp store
 * @author Anselm Marie
 * @param {object} e - event object of element
 * @param {object} props - content from the parent component
 * @return {object}
 */
const sendDispatchModify = (e, props) => {
  const urlData = { index: props.i, url: e.currentTarget.value };
  props.modifyUrl_AC(props.type, urlData);
}

/**
 * @function sendDispatchDelete
 * @desc This will delete a string in the csp store
 * @author Anselm Marie
 * @param {object} props - content from the parent component
 * @return {object}
 */
const sendDispatchDelete = (props) => {
  const urlData = { index: props.i };
  props.deleteUrl_AC(props.type, urlData);
}

/**
 * @function columnCheck
 * @desc This will delete a string in the csp store
 * @author Anselm Marie
 * @param {number} i - index of data
 * @param {object} customData - index of data
 * @return {boolean}
 */
const columnCheck = (i, customData) => {

  i = i + 1;

  let addSplit = false;

  if (!dataLength) {
    dataLength = customData.length;
  }

  if (i === theNextSplit) {
    addSplit = true;
    theNextSplit = theNextSplit + rowSplit;
    console.log('1');
  }

  if (i === dataLength) {
    dataLength = null;
    theNextSplit = rowSplit;
  }

  return addSplit;

}

/**
 * @function Checkbox View
 * @desc render the checkbox url view
 * @author Anselm Marie
 * @param {object} props - content from the parent component
 * @return {JSX.Element}
 */
export default (props) => {
  return (
    <>
      <div className="column-custom">
        <input type="input" id={props.inputName} className="form-control" aria-checked={props.checked} name={props.inputName} value={props.el} onChange={(e) => sendDispatchModify(e, props)} />
        <span role="button" className="delete-button" onClick={() => sendDispatchDelete(props)}>x</span>
      </div>
      {columnCheck(props.i, props.customData) && <hr />}
    </>
  )
};