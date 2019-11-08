/* Node Modules */
import React from 'react';
/* Components */
import HeadingComponent from '../heading.component';
import CheckboxComponent from '../checkbox.component';

/**
 * @function Main Header View
 * @desc render the checkbox url view
 * @author Anselm Marie
 * @param {object} $this - parent information data
 * @return {JSX.Element}
 */
export default ($this) => {
  return (
    <>

      <div className="row">
        <div className="col-md-12">

          <HeadingComponent heading="h1">
            Content Security Policy Generator
          </HeadingComponent>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis arcu eget felis pharetra euismod. Sed massa felis, euismod varius leo eget, molestie iaculis velit. Cras mauris velit, rhoncus id metus eu, luctus vestibulum est. Donec convallis pharetra eleifend. Suspendisse cursus aliquet metus nec facilisis.</p>

          {$this.state.errorMessage.show &&
            <div className="alert alert-danger" role="alert">
              {$this.state.errorMessage.message}
            </div>}

          {$this.state.successMessage.show &&
            <div className="alert alert-success" role="alert">
              {$this.state.successMessage.message}
            </div>}

          <form id="cspForm" onSubmit={$this.checkStatus}>
            <textarea name="cspImportTextArea" id="cspBreakdownTextArea" rows="5" name="cspBreakdownTextArea" className="csp-breakdown-text-area form-control" type="text" placeholder="Enter CSP content" aria-label="Enter Content Security Policy content" />
            {$this.state.importCompleted &&
            <div>
              <CheckboxComponent
                data={$this.state.reImportCheckbox}
                onClick={$this.updateCheckbox} />
            </div>}
            <button id="cspBtn" className={`btn btn-primary ${$this.getImportStatus($this.state.importCompleted)}`} disabled={$this.state.importCompleted && !$this.state.reImportCheckbox.checked}>Import</button>
          </form>

        </div>
      </div>

    </>
  );
};
