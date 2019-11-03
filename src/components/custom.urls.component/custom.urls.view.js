/* Node Modules */
import React from 'react';
/* Components */
import HeadingComponent from '../../components/heading.component';
import CheckboxComponent from '../../components/checkbox.component';

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
          return <CheckboxComponent inputName={inputName} key={i} i={i} el ={el} {...props} />
        })}
      </div>
    </>
  )
};
