import { CURRENT_PAGE } from './page.constants';

export interface IPageState {
  currentPage: string;
}

export interface ICurrentPage_AC {
  name: string;
  path: string;
}

export interface UpdatePageAction {
  type: typeof CURRENT_PAGE;
  data: ICurrentPage_AC;
}

export type PageActionTypes = UpdatePageAction;
