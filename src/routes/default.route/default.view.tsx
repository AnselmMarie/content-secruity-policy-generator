/* Node Module */
import React from 'react';
/* Store */
import { DEFAULT_SRC } from '../../store/csp/csp.constants';
/* Component */
import GeneralSettingsComponent from '../../components/general.settings.component';
import CustomUrlComponent from '../../components/custom.urls.component';
/* Component Content */
import { IDefaultRouteProps } from './default.type';

/**
 * @function General Settings
 * @desc rendering the view for the default route
 * @param props - global property data
 */
export default (props: IDefaultRouteProps): JSX.Element => {
  return(
    <>

      <div className="row">

        <div className="setting-col col-lg-12 col-xl-3">
          <GeneralSettingsComponent
            type={DEFAULT_SRC}
            modifyCheckbox_AC={props.modifyCheckbox_AC}
            generalData={props.defaultGeneral} />
        </div>

        <div className="setting-col col-lg-12 col-xl-9">
          <CustomUrlComponent
            type={DEFAULT_SRC}
            addEmptyUrl_AC={props.addEmptyUrl_AC}
            modifyUrl_AC={props.modifyUrl_AC}
            deleteUrl_AC={props.deleteUrl_AC}
            customData={props.defaultCustom} />
        </div>

      </div>

    </>
  );
}
