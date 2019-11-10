export type IProps = {
  generalData: string[],
  modifyCheckbox_AC: (type: string, checkboxData: ICheckbox) => void,
  type: string,
}

export type IElData = {
  name: string,
  val: string,
  checked: boolean,
  // array: string[],
}

type ICheckbox = {
  index: number,
  name: string,
}