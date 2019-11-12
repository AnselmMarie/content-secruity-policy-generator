/* Node Module */
import React from 'react';
/* Store */
import { SCRIPT_SRC } from '../../store/csp/csp.constants';
/* Component */
import GeneralSettingsComponent from '../../components/general.settings.component';
import CustomUrlComponent from '../../components/custom.urls.component';
/* Component Content */
import { IScriptRouteProps } from './script.type';

/**
 * @function Script View
 * @desc rendering the view for the frame route
 * @param props - global Script data
 */
export default (props: IScriptRouteProps): JSX.Element => {
  return (
    <>

      <div className="row">

        <div className="col-lg-12 col-xl-3">
          <GeneralSettingsComponent
            type={SCRIPT_SRC}
            modifyCheckbox_AC={props.modifyCheckbox_AC}
            generalData={props.scriptGeneral} />
        </div>

        <div className="col-lg-12 col-xl-9">
          <CustomUrlComponent
            type={SCRIPT_SRC}
            addEmptyUrl_AC={props.addEmptyUrl_AC}
            modifyUrl_AC={props.modifyUrl_AC}
            deleteUrl_AC={props.deleteUrl_AC}
            customData={props.scriptCustom} />
        </div>

      </div>

    </>
  )
}
