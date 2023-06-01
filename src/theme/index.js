import { createTheme } from '@mui/material/styles'

import colors from './theme.module.scss'
import getThemePalette from './palette'
import getTypographyTheme from './typography'

/**
 * Represent theme style and structure as per Material-UI
 */
export default () => {
  const themeOptions = {
    direction: 'ltr',
    palette: getThemePalette(colors),
    typography: getTypographyTheme(colors)
  }

  return createTheme(themeOptions)
}
