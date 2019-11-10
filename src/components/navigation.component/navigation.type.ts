import { IPageFtn_AC } from '../../store/page/page.type';

export interface TNavigationProps extends Partial<IPageFtn_AC> {}

export type TNavLinks = {
  name: string,
  path: string,
}
