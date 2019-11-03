/* Node Modules */
import React from 'react';
/* Components */
import HeadingComponent from '../../components/heading.component';

/**
 * @function sendDispatchModify
 * @desc This will update the csp store
 * @author Anselm Marie
 * @param {object} e - event object of element
 * @param {object} i - index of data
 * @param {object} props - content from the parent component
 * @return {object}
 */
const sendDispatchModify = (e, i, props) => {
  const urlData = { index: i, name: e.currentTarget.value };
  props.modifyUrl(props.type, urlData);
}

/**
 * @function sendDispatchAdd
 * @desc This will add an empty string in the csp store
 * @author Anselm Marie
 * @param {object} props - content from the parent component
 * @return {object}
 */
const sendDispatchAdd = (props) => {
  props.addUrl(props.type);
}

/**
 * @function sendDispatchDelete
 * @desc This will delete a string in the csp store
 * @author Anselm Marie
 * @param {object} i - index of data
 * @param {object} props - content from the parent component
 * @return {object}
 */
const sendDispatchDelete = (i, props) => {
  const urlData = { index: i };
  props.deleteUrl(props.type, urlData);
}

/**
 * @function Custom Url
 * @desc render the custom url view
 * @author Anselm Marie
 * @param {object} props - content from the parent component
 * @return {JSX.Element}
 */
export default (props) => {
  return (
    <>
      <HeadingComponent heading="h3">
        Custom Urls <span onClick={() => sendDispatchAdd(props)}>+</span>
      </HeadingComponent>
      <div>
        {props.customData && props.customData.map((el, i) => {
          const inputName = `name${i}`;
          return (
            <div key={i} className="col-xs-6 col-md-3">
              <input type="input" id={inputName} className="form-control" name={inputName} value={el} onChange={(e) => sendDispatchModify(e, i, props)} />
              <span className="delete-button" onClick={() => sendDispatchDelete(i, props)}>x</span>
            </div>
          )
        })}
      </div>
    </>
  )
};
