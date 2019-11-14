/* Config */
import { MAIN_HEADER } from '../../configs/constants/content.constants';

export const mainHeaderState = {
  importCompleted: false,
  inputData: '',
  reImportCheckbox: {
    label: MAIN_HEADER.IMPORT_NOTE,
    checked: false,
    name: 'reImportCheckbox'
  }
}

export const mainHeaderMessage = {
  errorMessage: {
    show: false,
    message: '',
  },
  successMessage: {
    show: false,
    message: '',
  },
}
