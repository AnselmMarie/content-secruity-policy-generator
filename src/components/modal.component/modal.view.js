/* Node Modules */
import React from 'react';
/* Components */

export default () => {
  return (
    <div className={`modal ${this.modalShown(this.props.showModal)}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <form onSubmit={this.fieldValidation}>

            <div className="modal-header">
              <h5 className="modal-title">By importing...</h5>
            </div>

            <div className="modal-body">
              <p>You will lose any current information. Click "Import" if this is ok otherwise click "Cancel".</p>
            </div>

            <div className="modal-footer">
              <button onClick={} className="btn btn-primary">Import</button>
              <button onClick={} className="btn btn-secondary">Cancel</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}
