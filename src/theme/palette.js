/**
 * Generate the custom theme object for Material-UI
 * @param {JsonObject} theme Theme customization object
 */
export default colors => ({
  mode: 'light',
  common: {
    black: colors?.darkPaper
  },
  primary: {
    light: colors?.primaryLight,
    main: colors?.primaryMain,
    dark: colors?.primaryDark,
    contrastText: colors?.primaryContrastText
  },
  error: {
    light: colors?.errorLight,
    main: colors?.errorMain,
    dark: colors?.errorDark,
    contrastText: colors?.errorContrastText
  },
  warning: {
    light: colors?.warningLight,
    main: colors?.warningMain,
    dark: colors?.warningDark,
    contrastText: colors?.warningContrastText
  },
  success: {
    light: colors?.successLight,
    main: colors?.successMain,
    dark: colors?.successDark,
    contrastText: colors?.successContrastText
  },
  grey: {
    50: colors?.grey50,
    100: colors?.grey100,
    400: colors?.grey400,
    500: colors?.grey500,
    600: colors?.grey600,
    700: colors?.grey700,
    900: colors?.grey900
  },
  text: {
    primary: colors?.grey700,
    secondary: colors?.grey500,
    dark: colors?.grey900,
    hint: colors?.grey100
  },
  background: {
    paper: colors?.paper,
    default: colors?.paper
  },
  white: colors?.white
})
