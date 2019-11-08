import React from 'react';

/**
 * @function checkClass
 * @desc change style based on checked
 * @author Anselm Marie
 * @param {boolean} checked - is checkbox is checked
 * @return {string}
 */
const checkClass = (checked) => {
  return checked ? 'is-checked' : 'not-checked';
}

/**
 * @function Checkbox View
 * @desc rendering checkbox view
 * @author Anselm Marie
 * @param {object} props - global property data
 * @return {JSX.Element}
 */
export default (props) => {
  const data = props.data;
  return (
    <label name={data.name}>
      <input type="checkbox" name={data.name} data-checked={data.checked} onClick={() => props.onClick()} />
      <div className={`checkbox ${checkClass(data.checked)}`}></div>
      {data.label || data.name}
    </label>
  )
}
