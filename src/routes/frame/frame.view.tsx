import React, { ReactElement } from 'react';

import { FRAME_SRC } from '../../store/csp/csp.constants';
import GeneralSettingsComponent from '../../ui/general.settings';
import CustomUrlComponent from '../../ui/custom.urls';

import { IFrameRouteProps } from './frame.type';

export default (props: IFrameRouteProps): ReactElement => {
  return (
    <>
      <div className="row">
        <div className="setting-col col-lg-12 col-xl-3">
          <GeneralSettingsComponent
            type={FRAME_SRC}
            modifyCheckbox_AC={props.modifyCheckbox_AC}
            generalData={props.frameGeneral}
          />
        </div>

        <div className="setting-col col-lg-12 col-xl-9">
          <CustomUrlComponent
            type={FRAME_SRC}
            addEmptyUrl_AC={props.addEmptyUrl_AC}
            modifyUrl_AC={props.modifyUrl_AC}
            deleteUrl_AC={props.deleteUrl_AC}
            customData={props.frameCustom}
          />
        </div>
      </div>
    </>
  );
};
