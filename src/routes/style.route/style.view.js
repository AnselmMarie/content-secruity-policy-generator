/* Node Modules */
import React from 'react';
/* Data Store */
import { STYLE_SRC } from '../../data.store/actions/action.constants';
/* Components */
import HeadingComponent from '../../components/heading.component';
import GeneralSettingsComponent from '../../components/general.settings.component';
import CustomUrlComponent from '../../components/custom.urls.component';

export default (props) => {
  return (
    <>

    <HeadingComponent heading='h2'>
      Style Source Content
    </HeadingComponent>

    <GeneralSettingsComponent
      type={STYLE_SRC}
      modifyCheckbox_AC={props.modifyCheckbox_AC}
      generalData={props.styleGeneral} />

    <CustomUrlComponent
      type={STYLE_SRC}
      addEmptyUrl_AC={props.addEmptyUrl_AC}
      modifyUrl_AC={props.modifyUrl_AC}
      deleteUrl_AC={props.deleteUrl_AC}
      customData={props.styleCustom} />

  </>
  )
}
