/* Node Module */
import React from 'react';
/* Component */
import HeadingComponent from '../heading.component';
import UrlInputComponent from '../url.input.component';
/* Component Content */
import { IProps } from './custom.url.type';

/**
 * @function sendDispatchAdd
 * @desc This will add an empty string in the csp store
 * @param {object} props - content from the parent component
 */
const sendDispatchAdd = (props: IProps): void => {
  props.addEmptyUrl_AC(props.type, null);
}

/**
 * @function Custom Url
 * @desc render the custom url view
 * @param props - content from the parent component
 */
export default (props: IProps): JSX.Element => {
  return (
    <>

      <HeadingComponent heading="h3">
        Custom Urls <span className="cursor-pointer" onClick={() => sendDispatchAdd(props)}>+</span>
      </HeadingComponent>
      <div>
        {props.customData && props.customData.map((el: string, i: number) => {
          const inputName = `name${i}`;
          return <UrlInputComponent inputName={inputName} key={i} i={i} el ={el} {...props} />
        })}
      </div>

    </>
  )
};
