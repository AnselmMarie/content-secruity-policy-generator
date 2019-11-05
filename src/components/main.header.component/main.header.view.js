/* Node Modules */
import React from 'react';
/* Components */
import HeadingComponent from '../heading.component';
/* Modules */
import { importData } from '../../modules/import.data.module';

/**
 * @function checkStatus
 * @desc render the checkbox url view
 * @author Anselm Marie
 * @param {object} e - event from the submit
 * @param {object} props - parent information data
 */
const checkStatus = (e, props) => {
  e.preventDefault();
  const formClass = e.target.elements.cspBtn.className;
  const inputData = e.target.elements.cspBreakdownTextArea.value;

  if (formClass.includes('csp-start-progress')) {
    importData(inputData, props);
  } else if (formClass.includes('csp-reset-progress')) {
    console.log('csp-reset-progress');
  }
}

/**
 * @function Main Header View
 * @desc render the checkbox url view
 * @author Anselm Marie
 * @param {object} props - parent information data
 * @return {JSX.Element}
 */
export default (props) => {
  return (
    <>

      <div className="row">
        <div className="col-md-12">

          <HeadingComponent heading="h1">
            Content Security Policy Generator
          </HeadingComponent>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis arcu eget felis pharetra euismod. Sed massa felis, euismod varius leo eget, molestie iaculis velit. Cras mauris velit, rhoncus id metus eu, luctus vestibulum est. Donec convallis pharetra eleifend. Suspendisse cursus aliquet metus nec facilisis.</p>

          <form id="cspForm" onSubmit={(e) => checkStatus(e, props)}>
            <textarea name="cspImportTextArea" id="cspBreakdownTextArea" rows="5" name="cspBreakdownTextArea" className="csp-breakdown-text-area form-control" type="text" placeholder="Enter CSP content" aria-label="Enter Content Security Policy content" />
            <button id="cspBtn" className="btn btn-primary csp-start-progress">Import</button>
            {/* <button id="resetProgress" className="btn btn-primary">Reset Progress</button> */}
          </form>

        </div>
      </div>

    </>
  );
};
