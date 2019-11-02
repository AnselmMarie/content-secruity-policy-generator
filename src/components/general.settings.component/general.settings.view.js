/* Node Modules */
import React from 'react';
/* Components */
import HeadingComponent from '../../components/heading.component';
import CheckboxComponent from '../checkbox.component';

/**
 * @function General Settings
 * @desc rendering the view for the general settings component
 * @author Anselm Marie
 * @param {object} props - global property data
 */
export default (props) => {
  return (
    <>

      <HeadingComponent heading="h3">
        General Settings
      </HeadingComponent>

      {props.generalData &&
        <ul>
          {props.generalData.map((el, i) => {
            return (
              <li key={i}>
                <label name={el.name}>
                  <input type="checkbox" name={el.name} data-checked={el.checked} />
                  {el.name}
                </label>
              </li>
            )
          })}
        </ul>
      }

    </>
  )
};
