import { SHOW_LOADER } from './loader.constants';

export interface ILoaderState {
  isLoaderShown: boolean;
}

export interface UpdateLoaderAction {
  type: typeof SHOW_LOADER;
  data: boolean;
}

export interface ILoaderFtn_AC {
  showLoader_AC: () => void,
  hideLoader_AC: () => void,
}

export type LoaderActionTypes = UpdateLoaderAction;
