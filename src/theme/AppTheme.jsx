import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
import PropTypes from 'prop-types'
import getCustomTheme from './'

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={getCustomTheme()}>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        {children}
      </StyledEngineProvider>
    </ThemeProvider>
  )
}

AppTheme.propTypes = {
  children: PropTypes.node
}
