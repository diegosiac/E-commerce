import PropTypes from 'prop-types'
import { Grid, TextField } from '@mui/material'

export const InputAdress = ({ id, name, label, autoComplete, helperText, placeholder, disabled, inputProps, ...props }) => {
  return (
    <Grid item {...props}>
      <TextField
        {...inputProps}
        required
        variant='standard'
        fullWidth
        id={id}
        name={name}
        label={label}
        autoComplete={autoComplete}
        helperText={helperText}
        placeholder={placeholder}
        disabled={disabled}
        aria-label={`Introduce ${label}`}
      />
    </Grid>
  )
}

InputAdress.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
  inputProps: PropTypes.object,
  disabled: PropTypes.bool,
  helperText: PropTypes.string,
  placeholder: PropTypes.string
}
