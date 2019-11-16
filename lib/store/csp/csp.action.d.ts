import { ICheckboxData_AC, IUrlData_AC } from './csp.type';
import { CspActionTypes } from './csp.type';
export declare const modifyCheckbox_AC: (type: number, data: ICheckboxData_AC) => CspActionTypes;
export declare const modifyUrl_AC: (type: number, data: IUrlData_AC) => CspActionTypes;
export declare const addEmptyUrl_AC: (type: number) => CspActionTypes;
export declare const addUrl_AC: (type: number, data: IUrlData_AC) => CspActionTypes;
export declare const deleteUrl_AC: (type: number, data: IUrlData_AC) => CspActionTypes;
export declare const resetData_AC: () => CspActionTypes;
