import {
  TGlobalCheckbox,
  TGlobalUrl,
} from '../configs/types/global.type';

export type TCheckboxObject = {
  clonedData: TGlobalCheckbox[],
  currentObj: TGlobalCheckbox,
}

export type TUrlObject = {
  clonedData: string[],
  currentObj: TGlobalUrl,
}

export type TData = {
  index: number,
  name: string,
}

export type TUrl = {
  index: number,
  url?: string,
}
