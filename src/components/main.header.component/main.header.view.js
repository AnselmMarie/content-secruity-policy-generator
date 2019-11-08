/* Node Modules */
import React from 'react';
/* Components */
import HeadingComponent from '../heading.component';
/* Modules */
import { importData } from './import.module';

/**
 * @function getImportStatus
 * @desc changes class name based on import status
 * @author Anselm Marie
 * @param {boolean} importCompleted - if import status was already done
 */
const getImportStatus = (importCompleted) => {
  return importCompleted ? 'csp-reset-progress' : 'csp-start-progress';
}

/**
 * @function checkStatus
 * @desc render the checkbox url view
 * @author Anselm Marie
 * @param {object} e - event from the submit
 * @param {object} $this - parent information data
 */
const checkStatus = (e, $this) => {
  e.preventDefault();
  const formClass = e.target.elements.cspBtn.className;
  const inputData = e.target.elements.cspBreakdownTextArea.value;

  // If data doesn't exist display error
  if (!inputData) {
    alert('hi');
    return;
  }

  $this.setState({
    inputData: inputData,
    eventForm: e,
  });

  if (formClass.includes('csp-start-progress')) {
    importData(inputData, $this);
  } else if (formClass.includes('csp-reset-progress')) {
    console.log('csp-reset-progress');
  }
}

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

          <form id="cspForm" onSubmit={(e) => checkStatus(e, $this)}>
            <textarea name="cspImportTextArea" id="cspBreakdownTextArea" rows="5" name="cspBreakdownTextArea" className="csp-breakdown-text-area form-control" type="text" placeholder="Enter CSP content" aria-label="Enter Content Security Policy content" />
            <button id="cspBtn" className={`btn btn-primary ${getImportStatus($this.state.importCompleted)}`}>Import</button>
          </form>

        </div>
      </div>

    </>
  );
};
