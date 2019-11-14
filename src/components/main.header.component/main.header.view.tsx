/* Node Module */
import React from 'react';
/* Component */
import HeadingComponent from '../heading.component';
import CheckboxComponent from '../checkbox.component';
/* Config */
import { MAIN_HEADER } from '../../configs/constants/content.constants';
import './main.header.scss';

/**
 * @function Main Header View
 * @desc render the checkbox url view
 * @param $this - class content
 */
export default ($this: any): JSX.Element => {
  return (
    <header>

      <div className="row">
        <div className="col-md-12">

          <HeadingComponent heading="h1">
            {MAIN_HEADER.TITLE}
          </HeadingComponent>

          <p className="main-header-description">{MAIN_HEADER.DESCRIPTION}</p>

          {$this.state.errorMessage.show &&
            <div className="alert alert-danger" role="alert">
              {$this.state.errorMessage.message}
            </div>}

          {$this.state.successMessage.show &&
            <div className="alert alert-success" role="alert">
              {$this.state.successMessage.message}
            </div>}

          <hr />

          <form id="cspForm" onSubmit={$this.checkStatus}>
            <textarea name="cspImportTextArea" rows={5} id="cspBreakdownTextArea" className="csp-breakdown-text-area form-control" placeholder="Enter CSP content" aria-label="Enter Content Security Policy content" />

            <div className="row import-row">
              <button id="cspBtn" className={`btn btn-primary ${$this.getImportStatus($this.state.importCompleted)}`} disabled={$this.state.importCompleted && !$this.state.reImportCheckbox.checked}>{MAIN_HEADER.IMPORT_BTN}</button>
              {$this.state.importCompleted &&
              <div className="re-import-checkbox-container col">
                <CheckboxComponent
                  data={$this.state.reImportCheckbox}
                  onClick={$this.updateCheckbox} />
              </div>}
            </div>

          </form>

        </div>
      </div>

    </header>
  );
};
