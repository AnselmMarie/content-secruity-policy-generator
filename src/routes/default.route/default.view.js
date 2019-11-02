/* Node Modules */
import React from 'react';
/* Components */
import HeadingComponent from '../../components/heading.component';
import GeneralSettingsComponent from '../../components/general.settings.component';
import CustomUrlComponent from '../../components/custom.urls.component';

export default () => {
  return(
    <>

      <HeadingComponent heading="h2">
        Default Source Content
      </HeadingComponent>

      <GeneralSettingsComponent />
      <CustomUrlComponent />

    </>
  );
}
