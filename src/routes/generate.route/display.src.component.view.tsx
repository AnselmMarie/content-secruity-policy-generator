/* Node Module */
import React, { ReactElement } from 'react';
/* Component Content */
import { TDisplaySrcProps } from './generate.type';
/* Config */
import { GLOBAL_CONTENT } from '../../configs/constants/content.constants';

export default (props: TDisplaySrcProps): ReactElement => {
  return (
    <div className="single-src">
      {props.data && props.data}
      {!props.data && GLOBAL_CONTENT.NA}
    </div>
  );
};
