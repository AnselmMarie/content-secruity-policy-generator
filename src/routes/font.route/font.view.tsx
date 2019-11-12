/* Node Module */
import React from 'react';
/* Store */
import { FONT_SRC } from '../../store/csp/csp.constants';
/* Component */
import GeneralSettingsComponent from '../../components/general.settings.component';
import CustomUrlComponent from '../../components/custom.urls.component';
/* Component Content */
import { IFontRouteProps } from './font.type';

/**
 * @function Font View
 * @desc rendering the view for the font route
 * @param props - global property data
 */
export default (props: IFontRouteProps): JSX.Element => {
  return (
    <>

      <div className="row">

        <div className="col-lg-12 col-xl-3">
          <GeneralSettingsComponent
            type={FONT_SRC}
            modifyCheckbox_AC={props.modifyCheckbox_AC}
            generalData={props.fontGeneral} />
        </div>

        <div className="col-lg-12 col-xl-9">
          <CustomUrlComponent
            type={FONT_SRC}
            addEmptyUrl_AC={props.addEmptyUrl_AC}
            modifyUrl_AC={props.modifyUrl_AC}
            deleteUrl_AC={props.deleteUrl_AC}
            customData={props.fontCustom} />
        </div>

      </div>

    </>
  )
}
