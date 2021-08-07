/* Node Module */
import React, { ReactElement } from 'react';
/* Store */
import { IMG_SRC } from '../../store/csp/csp.constants';
/* Component */
import GeneralSettingsComponent from '../../ui/general.settings';
import CustomUrlComponent from '../../ui/custom.urls';
/* Component Content */
import { IImgRouteProps } from './img.type';

/**
 * @function Img View
 * @desc rendering the view for the img route
 * @param props - global property data
 */
export default (props: IImgRouteProps): ReactElement => {
  return (
    <>
      <div className="row">
        <div className="setting-col col-lg-12 col-xl-3">
          <GeneralSettingsComponent
            type={IMG_SRC}
            modifyCheckbox_AC={props.modifyCheckbox_AC}
            generalData={props.imgGeneral}
          />
        </div>

        <div className="setting-col col-lg-12 col-xl-9">
          <CustomUrlComponent
            type={IMG_SRC}
            addEmptyUrl_AC={props.addEmptyUrl_AC}
            modifyUrl_AC={props.modifyUrl_AC}
            deleteUrl_AC={props.deleteUrl_AC}
            customData={props.imgCustom}
          />
        </div>
      </div>
    </>
  );
};
