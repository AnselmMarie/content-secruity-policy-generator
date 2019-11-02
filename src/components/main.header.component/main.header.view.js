/* Node Modules */
import React from 'react';
/* Components */
import HeadingComponent from '../heading.component';

export default () => {
  return (
    <>

      <HeadingComponent heading="h1">
        Content Security Policy Generator
      </HeadingComponent>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis arcu eget felis pharetra euismod. Sed massa felis, euismod varius leo eget, molestie iaculis velit. Cras mauris velit, rhoncus id metus eu, luctus vestibulum est. Donec convallis pharetra eleifend. Suspendisse cursus aliquet metus nec facilisis.</p>

      <form className="form-inline mt-2 mt-md-0">
        <textarea id="cspBreakdownTextArea" rows="3" name="cspBreakdownTextArea" className="csp-breakdown-text-area form-control mr-sm-2" type="text" placeholder="Enter CSP content" aria-label="Enter CSP content" />
        <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
      </form>

    </>
  );
};
