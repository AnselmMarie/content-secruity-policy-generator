/* Node Modules */
import React from 'react';
/* Components */
import HeadingComponent from '../../components/heading.component';

export default () => {
  return (
    <>
      <HeadingComponent heading="h3">
        Custom Urls <span>+</span>
      </HeadingComponent>
      <div>
        <input type="input2" id="input2" className="form-control" name="input2" />
      </div>
    </>
  )
};
