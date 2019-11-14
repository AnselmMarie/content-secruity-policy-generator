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
  TITLE: 'Content Security Policy Generator',
  DESCRIPTION: 'Generate your Content Security Policy header with this online generator.',
  IMPORT_BTN: 'Import',
  IMPORT_NOTE: 'Your information will be lost if the import button is used again. Click this checkbox if that is ok.',
  ERROR_MESSAGE_NO_CONTENT: 'Please enter valid CSP data for the import to work.',
  ERROR_MESSAGE_NO_SUCCESS: 'The import didn\'t work as planned. Please make sure the data is valid. Otherwise, report this as a bug. Thanks.',
  SUCCESS_MESSAGE: 'Your CSP data was imported! If you need to import again please see the checkbox by the import button.',
}

export const GLOBAL_CONTENT = {
  GENERAL_SETTINGS: 'General Settings',
  CUSTOM_URLS: 'Custom Urls',
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
  SUB_TITLE: 'Make sure your csp is valid and good to go with these sites: <a href="https://csp-evaluator.withgoogle.com/" target="_blank">CSP Evaluator</a> and <a href="https://cspvalidator.org/" target="_blank">Content Security Policy (CSP) Validator</a>',
}
