/* Node Module */
import React from 'react';
/* Store */
import { STYLE_SRC } from '../../store/csp/csp.constants';
/* Component */
import HeadingComponent from '../../components/heading.component';
import GeneralSettingsComponent from '../../components/general.settings.component';
import CustomUrlComponent from '../../components/custom.urls.component';
/* Component Content */
import { IStyleRouteProps } from './style.type';
/* Config */
import { STYLE_ROUTE } from '../../configs/constants/content.constants';

export default (props: IStyleRouteProps) => {
  return (
    <>

    <HeadingComponent heading='h2'>
      {STYLE_ROUTE.TITLE}
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
