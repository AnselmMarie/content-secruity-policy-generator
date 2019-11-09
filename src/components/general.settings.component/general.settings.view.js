/* Node Module */
import React from 'react';
/* Component */
import HeadingComponent from '../heading.component';
import CheckboxComponent from '../checkbox.component';

/**
 * @function General Settings
 * @desc rendering the view for the general settings component
 * @author Anselm Marie
 * @param {object} props - global property data
 * @return {JSX.Element}
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
            const checkboxData = {index: i, name: el.name};
            return (
              <li key={i}>
                <CheckboxComponent
                 onClick={() => props.modifyCheckbox_AC(props.type, checkboxData)}
                 data={el} />
              </li>
            )
          })}
        </ul>
      }

    </>
  )
};
