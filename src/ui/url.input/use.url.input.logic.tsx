import React from 'react';

import { IUrlInputProps } from './url.input.type';
import './url.input.scss';

let theNextSplit: number = 3;

let rowSplit: number = 3;

let dataLength: number | null = null;

const useUrlInputLogic = () => {
  const sendDispatchModify = (
    e: React.ChangeEvent<HTMLButtonElement>,
    props: IUrlInputProps
  ): void => {
    const urlData = { index: props.i, url: e.currentTarget.value };
    props.modifyUrl_AC(props.type, urlData);
  };

  const sendDispatchDelete = (props: IUrlInputProps): void => {
    const urlData = { index: props.i };
    props.deleteUrl_AC(props.type, urlData);
  };

  const columnCheck = (i: number, customData: string[]): boolean => {
    i = i + 1;

    let addSplit = false;

    if (!dataLength) {
      dataLength = customData.length;
    }

    if (i === theNextSplit) {
      addSplit = true;
      theNextSplit = theNextSplit + rowSplit;
    }

    if (i === dataLength) {
      dataLength = null;
      theNextSplit = rowSplit;
    }

    return addSplit;
  };

  return {
    onSendDispatchModify: sendDispatchModify,
    onSendDispatchDelete: sendDispatchDelete,
    onColumnCheck: columnCheck,
  };
};

export default useUrlInputLogic;
