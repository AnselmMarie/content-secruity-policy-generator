import { RouteComponentProps } from 'react-router-dom';

export interface IMainHeaderProps extends RouteComponentProps {
  addEmptyUrl_AC: (type: string, urlData: any) => void,
  deleteUrl_AC: (type: string, urlData: any) => void,
  modifyUrl_AC: (type: string, urlData: any) => void,
  addUrl_AC: (type: string, urlData: any) => void,
  modifyCheckbox_AC: (type: string, data: any) => void,
  resetData_AC: () => void,
}

export type IMainHeaderState = {
  importCompleted: boolean,
  inputData: string,
  reImportCheckbox: {
    label: string,
    checked: boolean,
    name: string
},
  errorMessage: {
    show: boolean,
    message: string,
  },
  successMessage: {
    show: boolean,
    message: string,
  },
}
