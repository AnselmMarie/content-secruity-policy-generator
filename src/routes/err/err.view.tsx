import React from 'react';

import HeadingComponent from '../../ui/heading';

import { ERROR_ROUTE } from '../../configs/constants/content.constants';

export default () => {
  return (
    <>
      <HeadingComponent heading="h2">{ERROR_ROUTE.TITLE}</HeadingComponent>

      <p>{ERROR_ROUTE.DESCRIPTION}</p>
    </>
  );
};
