/* Node Modules */
import React from 'react';
/* Components */
import HeadingComponent from '../../components/heading.component';

/**
 * @function sendDispatch
 * @desc This will update the csp store
 * @author Anselm Marie
 * @param {object} e - event object of element
 * @param {object} i - index of data
 * @param {object} props - content from the parent component
 * @return {object}
 */
const sendDispatch = (e, i, props) => {
  const urlData = {index: i, name: e.currentTarget.value};
  props.modifyUrl(props.type, urlData);
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
        Custom Urls <span>+</span>
      </HeadingComponent>
      <div>
        {props.customData && props.customData.map((el, i) => {
          const inputName = `name${i}`;
          return (
            <div key={i} className="col-xs-6">
              <input type="input" id={inputName} className="form-control" name={inputName} value={el} onChange={(e) => sendDispatch(e, i, props)} />
              <span className="delete-button">x</span>
            </div>
          )
        })}
      </div>
    </>
  )
};
