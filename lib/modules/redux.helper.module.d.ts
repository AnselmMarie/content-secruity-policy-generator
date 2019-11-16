import { ICspState } from '../store/csp/csp.type';
import { TCheckboxObject, TUrlObject, TData, TUrl } from './redux.helper.type';
export declare const updateChecked: (state: ICspState, data: TData, dataOfInterest: string) => TCheckboxObject;
export declare const updateUrl: (state: ICspState, data: TUrl, dataOfInterest: string) => TUrlObject;
export declare const addUrl: (state: ICspState, url: string, dataOfInterest: string) => string[];
export declare const deleteUrl: (state: ICspState, data: TUrl, dataOfInterest: string) => TUrlObject;
