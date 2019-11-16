import React from 'react';
import { IGenerateProps, TGenerateState, TSrcData } from './generate.type';
import { TGlobalCheckbox } from 'configs/types/global.type';
declare class GenerateContainer extends React.Component<IGenerateProps, TGenerateState> {
    state: {
        cspGenerate: string;
        defaultData: string;
        imgData: string;
        styleData: string;
        scriptData: string;
        frameData: string;
        fontData: string;
        objectData: string;
    };
    tempCSP: {
        defaultData: string;
        fontData: string;
        frameData: string;
        imgData: string;
        scriptData: string;
        styleData: string;
        objectData: string;
    };
    componentDidMount(): void;
    iterateMainData: () => void;
    getSrcData: (key: string) => TSrcData;
    iterateGeneralData: (data: TGlobalCheckbox[], srcData: TSrcData) => void;
    iterateCustomData: (data: string[], srcData: TSrcData) => void;
    createCspGenerateData: () => void;
    render(): JSX.Element;
}
export default GenerateContainer;
