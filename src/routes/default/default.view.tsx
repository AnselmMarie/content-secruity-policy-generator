import React, { ReactElement } from 'react';

import { DEFAULT_SRC } from '../../store/csp/csp.constants';
import GeneralSettingsComponent from '../../ui/general.settings';
import CustomUrlComponent from '../../ui/custom.urls';

import { IDefaultRouteProps } from './default.type';

export default (props: IDefaultRouteProps): ReactElement => {
  return (
    <>
      <div className="row">
        <div className="setting-col col-lg-12 col-xl-3">
          <GeneralSettingsComponent
            type={DEFAULT_SRC}
            modifyCheckbox_AC={props.modifyCheckbox_AC}
            generalData={props.defaultGeneral}
          />
        </div>

        <div className="setting-col col-lg-12 col-xl-9">
          <CustomUrlComponent
            type={DEFAULT_SRC}
            addEmptyUrl_AC={props.addEmptyUrl_AC}
            modifyUrl_AC={props.modifyUrl_AC}
            deleteUrl_AC={props.deleteUrl_AC}
            customData={props.defaultCustom}
          />
        </div>
      </div>
    </>
  );
};
