/* Node Module */
import React, { ReactElement } from 'react';
/* Component */
import HeadingComponent from '../heading';
import CheckboxComponent from '../checkbox';
/* Component Content */
import { IGeneralSettingsProps } from './general.settings.type';
/* Config */
import { TGlobalCheckbox } from '../../configs/types/global.type';
/* Config */
import { GLOBAL_CONTENT } from '../../configs/constants/content.constants';

/**
 * @function General Settings View
 * @desc rendering the view for the general settings component
 * @param props - global property data
 */
export default (props: IGeneralSettingsProps): ReactElement => {
  return (
    <>
      <HeadingComponent heading="h2">
        {GLOBAL_CONTENT.GENERAL_SETTINGS}
      </HeadingComponent>

      <p>{GLOBAL_CONTENT.GENERAL_DESCRIPTION}</p>

      {props.generalData && (
        <ul>
          {props.generalData.map(
            (el: TGlobalCheckbox, i: number): ReactElement => {
              const checkboxData = { index: i, name: el.name };
              return (
                <li key={i}>
                  <CheckboxComponent
                    onClick={() =>
                      props.modifyCheckbox_AC(props.type, checkboxData)
                    }
                    data={el}
                  />
                </li>
              );
            }
          )}
        </ul>
      )}
    </>
  );
};
