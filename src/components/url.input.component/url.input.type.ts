export type IProps = {
  addEmptyUrl_AC: (type: string, urlData: any) => void,
  deleteUrl_AC: (type: string, urlData: any) => void,
  modifyUrl_AC: (type: string, urlData: any) => void,
  customData: string[],
  el: string,
  inputName: string,
  type: string,
  i: number,
  checked: boolean,
}
