/* Node Module */
import React from 'react';
/* Store */
import { FRAME_SRC } from '../../store/csp/csp.constants';
/* Component */
import GeneralSettingsComponent from '../../components/general.settings.component';
import CustomUrlComponent from '../../components/custom.urls.component';
/* Component Content */
import { IFrameRouteProps } from './frame.type';

/**
 * @function Frame View
 * @desc rendering the view for the frame route
 * @param props - global property data
 */
export default (props: IFrameRouteProps): JSX.Element => {
  return (
    <>

      <div className="row">

        <div className="col-lg-12 col-xl-3">
          <GeneralSettingsComponent
            type={FRAME_SRC}
            modifyCheckbox_AC={props.modifyCheckbox_AC}
            generalData={props.frameGeneral} />
        </div>

        <div className="col-lg-12 col-xl-9">
          <CustomUrlComponent
            type={FRAME_SRC}
            addEmptyUrl_AC={props.addEmptyUrl_AC}
            modifyUrl_AC={props.modifyUrl_AC}
            deleteUrl_AC={props.deleteUrl_AC}
            customData={props.frameCustom} />
        </div>

      </div>

    </>
  )
}
