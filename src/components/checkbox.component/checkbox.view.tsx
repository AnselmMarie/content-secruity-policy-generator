/* Node Module */
import React from 'react';
/* Component Content */
import { IProps } from './checkbox.type';

/**
 * @function checkClass
 * @desc change style based on checked
 * @param checked - is checkbox is checked
 */
const checkClass = (checked: boolean): string => {
  return checked ? 'is-checked' : 'not-checked';
}

/**
 * @function Checkbox View
 * @desc rendering checkbox view
 * @param props - global property data
 */
export default (props: IProps): JSX.Element =>  {
  const data = props.data;
  return (
    <label htmlFor={data.name}>
      <input aria-hidden="true" type="checkbox" id={data.name} name={data.name} data-checked={data.checked} onClick={() => props.onClick()} />
      <div className={`aria-focus checkbox ${checkClass(data.checked)}`}></div>
      {data.label || data.name}
    </label>
  )
}
