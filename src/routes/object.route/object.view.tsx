/* Node Module */
import React, { ReactElement } from 'react';
/* Store */
import { OBJECT_SRC } from '../../store/csp/csp.constants';
/* Component */
import GeneralSettingsComponent from '../../ui/general.settings';
import CustomUrlComponent from '../../ui/custom.urls';
/* Component Content */
import { IObjectRouteProps } from './object.type';

/**
 * @function Object View
 * @desc rendering the view for the img route
 * @param props - global property data
 */
export default (props: IObjectRouteProps): ReactElement => {
  return (
    <>
      <div className="row">
        <div className="setting-col col-lg-12 col-xl-3">
          <GeneralSettingsComponent
            type={OBJECT_SRC}
            modifyCheckbox_AC={props.modifyCheckbox_AC}
            generalData={props.objectGeneral}
          />
        </div>

        <div className="setting-col col-lg-12 col-xl-9">
          <CustomUrlComponent
            type={OBJECT_SRC}
            addEmptyUrl_AC={props.addEmptyUrl_AC}
            modifyUrl_AC={props.modifyUrl_AC}
            deleteUrl_AC={props.deleteUrl_AC}
            customData={props.objectCustom}
          />
        </div>
      </div>
    </>
  );
};
