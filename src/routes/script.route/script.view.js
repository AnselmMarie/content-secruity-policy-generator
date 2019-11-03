/* Node Modules */
import React from 'react';
/* Data Store */
import { SCRIPT_SRC } from '../../data.store/actions/action.constants';
/* Components */
import HeadingComponent from '../../components/heading.component';
import GeneralSettingsComponent from '../../components/general.settings.component';
import CustomUrlComponent from '../../components/custom.urls.component';

export default (props) => {
  return (
    <>

      <HeadingComponent heading='h2'>
        Script Source Content
      </HeadingComponent>

      <GeneralSettingsComponent
        type={SCRIPT_SRC}
        modifyCheckbox={props.modifyCheckbox}
        generalData={props.scriptGeneral} />

      <CustomUrlComponent
        type={SCRIPT_SRC}
        addUrl={props.addUrl}
        modifyUrl={props.modifyUrl}
        deleteUrl={props.deleteUrl}
        customData={props.scriptCustom} />

    </>
  )
}
