/* Node Module */
import React from 'react';
/* Component */
import HeadingComponent from '../heading.component';
import CheckboxComponent from '../checkbox.component';
/* Component Content */
import { IGeneralSettingsProps } from './general.settings.type';

/**
 * @function General Settings
 * @desc rendering the view for the general settings component
 * @param props - global property data
 */
export default (props: IGeneralSettingsProps): JSX.Element => {
  return (
    <>

      <HeadingComponent heading="h3">
        General Settings
      </HeadingComponent>

      {props.generalData &&
        <ul>
          {props.generalData.map((el: any, i: number): JSX.Element => {
            console.log('el', el);
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
