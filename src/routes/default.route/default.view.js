/* Node Module */
import React from 'react';
/* Data Store */
import { DEFAULT_SRC } from '../../data.store/actions/action.constants';
/* Component */
import HeadingComponent from '../../components/heading.component';
import GeneralSettingsComponent from '../../components/general.settings.component';
import CustomUrlComponent from '../../components/custom.urls.component';

/**
 * @function General Settings
 * @desc rendering the view for the default route
 * @author Anselm Marie
 * @param {object} props - global property data
 */
export default (props) => {
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
