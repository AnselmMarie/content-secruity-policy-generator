/* Node Module */
import React from 'react';
/* Store */
import { IMG_SRC } from '../../store/csp/csp.constants';
/* Component */
import HeadingComponent from '../../components/heading.component';
import GeneralSettingsComponent from '../../components/general.settings.component';
import CustomUrlComponent from '../../components/custom.urls.component';
/* Component Content */
import { IImgRouteProps } from './img.type';

/**
 * @function Img View
 * @desc rendering the view for the img route
 * @param props - global property data
 */
export default (props: IImgRouteProps): JSX.Element => {
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
