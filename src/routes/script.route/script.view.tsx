import React, { ReactElement } from 'react';

import { SCRIPT_SRC } from '../../store/csp/csp.constants';

import GeneralSettingsComponent from '../../ui/general.settings';
import CustomUrlComponent from '../../ui/custom.urls';

import { IScriptRouteProps } from './script.type';

export default (props: IScriptRouteProps): ReactElement => {
  return (
    <>
      <div className="row">
        <div className="setting-col col-lg-12 col-xl-3">
          <GeneralSettingsComponent
            type={SCRIPT_SRC}
            modifyCheckbox_AC={props.modifyCheckbox_AC}
            generalData={props.scriptGeneral}
          />
        </div>

        <div className="setting-col col-lg-12 col-xl-9">
          <CustomUrlComponent
            type={SCRIPT_SRC}
            addEmptyUrl_AC={props.addEmptyUrl_AC}
            modifyUrl_AC={props.modifyUrl_AC}
            deleteUrl_AC={props.deleteUrl_AC}
            customData={props.scriptCustom}
          />
        </div>
      </div>
    </>
  );
};
