import React, { ReactElement } from 'react';

import HeadingComponent from '../heading';
import UrlInputComponent from '../url.input';
import { GLOBAL_CONTENT } from '../../configs/constants/content.constants';

import { ICustomUrlProps } from './custom.url.type';

const sendDispatchAdd = (props: ICustomUrlProps): void => {
  props.addEmptyUrl_AC(props.type);
};

export default (props: ICustomUrlProps): ReactElement => {
  return (
    <>
      <HeadingComponent heading="h2">
        {GLOBAL_CONTENT.CUSTOM_URLS}{' '}
        <span className="cursor-pointer" onClick={() => sendDispatchAdd(props)}>
          +
        </span>
      </HeadingComponent>

      <p>{GLOBAL_CONTENT.CUSTOM_URLS_DESCRIPTION}</p>

      <div className="row">
        {props.customData &&
          props.customData.map((el: string, i: number) => {
            const inputName = `name${i}`;
            return (
              <UrlInputComponent
                inputName={inputName}
                key={i}
                i={i}
                el={el}
                {...props}
              />
            );
          })}
      </div>
    </>
  );
};
