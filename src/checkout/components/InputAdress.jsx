import PropTypes from 'prop-types'
import { Grid, TextField } from '@mui/material'

export const InputAdress = ({ id, name, label, autoComplete, helperText, placeholder, disabled, ...props }) => {
  return (
    <Grid item {...props}>
      <TextField
        required
        id={id}
        name={name}
        label={label}
        helperText={helperText}
        placeholder={placeholder}
        fullWidth
        autoComplete={autoComplete}
        disabled={disabled}
        variant='standard'
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
  disabled: PropTypes.bool,
  helperText: PropTypes.string,
  placeholder: PropTypes.string
}
