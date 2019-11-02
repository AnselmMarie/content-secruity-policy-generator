/* Node Modules */
import React from 'react';
/* Components */
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

      <HeadingComponent heading="h2">
        Default Source Content
      </HeadingComponent>

      <GeneralSettingsComponent
        generalData={props.defaultData.generalData} />

      <CustomUrlComponent
        customData={props.defaultData.customData} />

    </>
  );
}
