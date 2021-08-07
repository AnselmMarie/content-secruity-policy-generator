import React, { ReactElement } from 'react';

import { IUrlInputProps } from './url.input.type';
import './url.input.scss';
import useUrlInputLogic from './use.url.input.logic';

export default (props: IUrlInputProps): ReactElement => {
  const { onSendDispatchModify, onSendDispatchDelete, onColumnCheck } =
    useUrlInputLogic();

  return (
    <>
      <div className="column-custom col-md-12 col-lg-6">
        <input
          type="input"
          id={props.inputName}
          className="form-control"
          name={props.inputName}
          value={props.el || ''}
          onChange={(e) => onSendDispatchModify(e, props)}
        />
        <span
          role="button"
          className="delete-button"
          onClick={() => onSendDispatchDelete(props)}
        >
          x
        </span>
      </div>
      {onColumnCheck(props.i, props.customData) && <hr />}
    </>
  );
};
