import React, { ReactElement } from 'react';
import useCheckboxLogic from './checkbox.logic';

import { IProps } from './checkbox.type';

const CheckboxView = (props: IProps): ReactElement => {
  const { onCheckClass } = useCheckboxLogic();

  const data = props.data;
  return (
    <label htmlFor={data.name}>
      <input
        tabIndex={-1}
        aria-hidden="true"
        type="checkbox"
        id={data.name}
        name={data.name}
        data-checked={data.checked}
        onClick={() => props.onClick()}
      />
      <div
        tabIndex={0}
        className={`aria-focus checkbox ${onCheckClass(data.checked)}`}
      ></div>
      {data.label || data.name}
    </label>
  );
};

export default CheckboxView;
