export const CSP_CONTENT = {
  WILDCARD: '*',
  WILDCARD_VAL: '*',
  NONE: 'none',
  NONE_VAL: 'none',
  SELF: 'self',
  SELF_VAL: 'self',
  DATA: 'data',
  DATA_VAL: 'data:',
  UNSAFE_INLINE: 'unsafe inline',
  UNSAFE_INLINE_VAL: 'unsafe-inline',
  UNSAFE_HASHES: 'unsafe hashes',
  UNSAFE_HASHES_VAL: 'unsafe-hashes',
  UNSAFE_EVAL: 'unsafe eval',
  UNSAFE_EVAL_VAL: 'unsafe-eval',
}

export const MAIN_HEADER = {
  TITLE: 'Content Security Policy Generator - Beta',
  DESCRIPTION: 'Import or manually create your Content Security Policy then generate it with a click of a button. Please keep older CSP\'s until you are satisfied with the results.',
  IMPORT_BTN: 'Import',
  IMPORT_PLACEHOLDER: 'Place your CSP data here to be imported.',
  IMPORT_NOTE: 'Your information will be lost if the import button is used again. Click this checkbox if that is ok.',
  ERROR_MESSAGE_NO_CONTENT: 'Please enter valid CSP data for the import to work.',
  ERROR_MESSAGE_NO_SUCCESS: 'The import didn\'t work as planned. Please make sure the data is valid. Otherwise, report this as a bug. Thanks.',
  SUCCESS_MESSAGE: 'Your CSP data was imported! If you need to import again please see the checkbox by the import button.',
}

export const GLOBAL_CONTENT = {
  GENERAL_SETTINGS: 'General Settings',
  GENERAL_DESCRIPTION: 'Select any data below.',
  CUSTOM_URLS: 'Custom Urls',
  CUSTOM_URLS_DESCRIPTION: 'Add as many URLs as needed for this src. Click the "+" button to add another input field.',
  NA: 'N/A',
  DEFAULT_SRC: 'Default-Src',
  IMG_SRC: 'Img-Src',
  STYLE_SRC: 'Style-Src',
  SCRIPT_SRC: 'Script-Src',
  FRAME_SRC: 'Frame-Src',
  FONT_SRC: 'Font-Src',
  OBJECT_SRC: 'Object-Src',
}

export const GENERATE_ROUTE = {
  TITLE: 'Summary',
  SUB_TITLE: 'Make sure your CSP is valid and good to go with these sites: <a href="https://csp-evaluator.withgoogle.com/" target="_blank">CSP Evaluator</a> and <a href="https://cspvalidator.org/" target="_blank">Content Security Policy (CSP) Validator</a>',
}

export const ERROR_ROUTE = {
  TITLE: '404 Error',
  DESCRIPTION: 'Unfortunately, this page doesn\'t exist but you can still import your CSP data above or click a link on your left.',
}