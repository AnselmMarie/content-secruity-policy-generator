/* Node Module */
import React from 'react';
/* Data Store */
import { FONT_SRC } from '../../store/csp/csp.constants';
/* Component */
import HeadingComponent from '../../components/heading.component';
import GeneralSettingsComponent from '../../components/general.settings.component';
import CustomUrlComponent from '../../components/custom.urls.component';

/**
 * @function Font View
 * @desc rendering the view for the font route
 * @author Anselm Marie
 * @param {object} props - global property data
 */
export default (props) => {
  return (
    <>

      <HeadingComponent heading='h2'>
        Script Source Content
      </HeadingComponent>

      <GeneralSettingsComponent
        type={FONT_SRC}
        modifyCheckbox_AC={props.modifyCheckbox_AC}
        generalData={props.fontGeneral} />

      <CustomUrlComponent
        type={FONT_SRC}
        addEmptyUrl_AC={props.addEmptyUrl_AC}
        modifyUrl_AC={props.modifyUrl_AC}
        deleteUrl_AC={props.deleteUrl_AC}
        customData={props.fontCustom} />

    </>
  )
}
