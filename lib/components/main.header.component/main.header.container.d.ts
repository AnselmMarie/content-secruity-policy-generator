import React from 'react';
import { IMainHeaderProps, IMainHeaderState, TCurrentSrc } from './main.header.type';
import { TGlobalCheckbox } from '../../configs/types/global.type';
declare class MainHeaderContainer extends React.Component<IMainHeaderProps, IMainHeaderState> {
    state: {
        errorMessage: {
            show: boolean;
            message: string;
        };
        successMessage: {
            show: boolean;
            message: string;
        };
        importCompleted: boolean;
        inputData: string;
        reImportCheckbox: {
            label: string;
            checked: boolean;
            name: string;
        };
    };
    getImportStatus: (importCompleted: boolean) => string;
    checkStatus: (e: React.ChangeEvent<any>) => void;
    updateCheckbox: () => void;
    importData: (inputData: string) => void;
    checkSrcType: (srcType: string) => TCurrentSrc;
    storeData: (currentSrc: TCurrentSrc, el: string) => void;
    getIndex: (el: string, curSrcData: TGlobalCheckbox[]) => number | void;
    render(): JSX.Element;
}
export default MainHeaderContainer;
