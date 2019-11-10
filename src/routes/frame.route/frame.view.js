/* Node Module */
import React from 'react';
/* Store */
import { FRAME_SRC } from '../../store/csp/csp.constants';
/* Component */
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
        type={FRAME_SRC}
        modifyCheckbox_AC={props.modifyCheckbox_AC}
        generalData={props.frameGeneral} />

      <CustomUrlComponent
        type={FRAME_SRC}
        addEmptyUrl_AC={props.addEmptyUrl_AC}
        modifyUrl_AC={props.modifyUrl_AC}
        deleteUrl_AC={props.deleteUrl_AC}
        customData={props.frameCustom} />

    </>
  )
}
