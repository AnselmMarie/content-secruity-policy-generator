/* Node Modules */
import React from 'react';
/* Components */
import HeadingComponent from '../../components/heading.component';

export default () => {
  return (
    <>
      <HeadingComponent heading="h3">
        General Settings
      </HeadingComponent>
      <div>
        <input type="checkbox" id="test" name="test" value="test" />
        <span>Test</span>
      </div>
      <div>
        <input type="checkbox" id="test2" name="test2" value="test2" />
        <span>Test 2</span>
      </div>
    </>
  )
};
