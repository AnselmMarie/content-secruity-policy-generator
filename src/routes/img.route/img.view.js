/* Node Module */
import React from 'react';
/* Data Store */
import { IMG_SRC } from '../../data.store/actions/action.constants';
/* Component */
import HeadingComponent from '../../components/heading.component';
import GeneralSettingsComponent from '../../components/general.settings.component';
import CustomUrlComponent from '../../components/custom.urls.component';

export default (props) => {
  return (
    <>

      <HeadingComponent heading='h2'>
        Img Source Content
      </HeadingComponent>

      <GeneralSettingsComponent
        type={IMG_SRC}
        modifyCheckbox_AC={props.modifyCheckbox_AC}
        generalData={props.imgGeneral} />

      <CustomUrlComponent
        type={IMG_SRC}
        addEmptyUrl_AC={props.addEmptyUrl_AC}
        modifyUrl_AC={props.modifyUrl_AC}
        deleteUrl_AC={props.deleteUrl_AC}
        customData={props.imgCustom} />

    </>
  )
}
