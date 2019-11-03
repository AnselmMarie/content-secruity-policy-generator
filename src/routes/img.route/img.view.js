/* Node Modules */
import React from 'react';
/* Data Store */
import { IMG_SRC } from '../../data.store/actions/action.constants';
/* Components */
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
        modifyCheckbox={props.modifyCheckbox}
        generalData={props.imgGeneral} />

      <CustomUrlComponent
        type={IMG_SRC}
        addUrl={props.addUrl}
        modifyUrl={props.modifyUrl}
        deleteUrl={props.deleteUrl}
        customData={props.imgCustom} />

    </>
  )
}
