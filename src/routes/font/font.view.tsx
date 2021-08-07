import React, { ReactElement } from 'react';

import { FONT_SRC } from '../../store/csp/csp.constants';
import GeneralSettingsComponent from '../../ui/general.settings';
import CustomUrlComponent from '../../ui/custom.urls';

import { IFontRouteProps } from './font.type';

export default (props: IFontRouteProps): ReactElement => {
  return (
    <>
      <div className="row">
        <div className="setting-col col-lg-12 col-xl-3">
          <GeneralSettingsComponent
            type={FONT_SRC}
            modifyCheckbox_AC={props.modifyCheckbox_AC}
            generalData={props.fontGeneral}
          />
        </div>

        <div className="setting-col col-lg-12 col-xl-9">
          <CustomUrlComponent
            type={FONT_SRC}
            addEmptyUrl_AC={props.addEmptyUrl_AC}
            modifyUrl_AC={props.modifyUrl_AC}
            deleteUrl_AC={props.deleteUrl_AC}
            customData={props.fontCustom}
          />
        </div>
      </div>
    </>
  );
};
