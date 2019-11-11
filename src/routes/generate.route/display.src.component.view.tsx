/* Node Module */
import React from 'react';
/* Component Content */
import { TDisplaySrcProps } from './generate.type';
/* Config */
import { GLOBAL_CONTENT } from '../../configs/constants/content.constants';

export default (props: TDisplaySrcProps): JSX.Element => {
  return (
    <>

      {props.data && <div>"{props.data}"</div>}
      {!props.data && <div>{GLOBAL_CONTENT.NA}</div>}

    </>
  )
}
