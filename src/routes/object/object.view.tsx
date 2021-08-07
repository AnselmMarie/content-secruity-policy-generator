import React, { ReactElement } from 'react';
import { OBJECT_SRC } from '../../store/csp/csp.constants';
import GeneralSettingsComponent from '../../ui/general.settings';
import CustomUrlComponent from '../../ui/custom.urls';

import { IObjectRouteProps } from './object.type';

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
