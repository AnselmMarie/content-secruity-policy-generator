/* Node Module */
import React from 'react';
/* Component */
import HeadingComponent from '../../ui/heading';
/* Config */
import { ERROR_ROUTE } from '../../configs/constants/content.constants';

export default () => {
  return (
    <>
      <HeadingComponent heading="h2">{ERROR_ROUTE.TITLE}</HeadingComponent>

      <p>{ERROR_ROUTE.DESCRIPTION}</p>
    </>
  );
};
