/* Node Module */
import React from 'react';
/* Component Content */
import { TDisplaySrcProps } from './generate.type';

export default (props: TDisplaySrcProps): JSX.Element => {
  return (
    <>

      {props.data && <div>"{props.data}"</div>}
      {!props.data && <div>N/A</div>}

    </>
  )
}
