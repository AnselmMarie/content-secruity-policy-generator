/* Node Module */
import React from 'react';
/* Store */
import { DEFAULT_SRC } from '../../store/csp/csp.constants';
/* Component */
import HeadingComponent from '../../components/heading.component';
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

      <HeadingComponent heading='h2'>
        Default Source Content
      </HeadingComponent>

      <GeneralSettingsComponent
        type={DEFAULT_SRC}
        modifyCheckbox_AC={props.modifyCheckbox_AC}
        generalData={props.defaultGeneral} />

      <CustomUrlComponent
        type={DEFAULT_SRC}
        addEmptyUrl_AC={props.addEmptyUrl_AC}
        modifyUrl_AC={props.modifyUrl_AC}
        deleteUrl_AC={props.deleteUrl_AC}
        customData={props.defaultCustom} />

    </>
  );
}
