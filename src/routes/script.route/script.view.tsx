/* Node Module */
import React from 'react';
/* Store */
import { SCRIPT_SRC } from '../../store/csp/csp.constants';
/* Component */
import HeadingComponent from '../../components/heading.component';
import GeneralSettingsComponent from '../../components/general.settings.component';
import CustomUrlComponent from '../../components/custom.urls.component';
/* Component Content */
import { IScriptRouteProps } from './script.type';
/* Config */
import { SCRIPT_ROUTE } from '../../configs/constants/content.constants';

/**
 * @function Script View
 * @desc rendering the view for the frame route
 * @param props - global Script data
 */
export default (props: IScriptRouteProps): JSX.Element => {
  return (
    <>

      <HeadingComponent heading='h2'>
        {SCRIPT_ROUTE.TITLE}
      </HeadingComponent>

      <GeneralSettingsComponent
        type={SCRIPT_SRC}
        modifyCheckbox_AC={props.modifyCheckbox_AC}
        generalData={props.scriptGeneral} />

      <CustomUrlComponent
        type={SCRIPT_SRC}
        addEmptyUrl_AC={props.addEmptyUrl_AC}
        modifyUrl_AC={props.modifyUrl_AC}
        deleteUrl_AC={props.deleteUrl_AC}
        customData={props.scriptCustom} />

    </>
  )
}
