import { useState } from 'react'
import PropTypes from 'prop-types'
import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

export const InputPassword = ({ onHandleChange, value, error }) => {
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword((show) => !show)
  return (
    <FormControl
      fullWidth
      className='mt-4'
      variant='outlined'
      color='success'
      error={!!error}
    >
      <InputLabel htmlFor='outlined-adornment-password'>Contraseña</InputLabel>
      <OutlinedInput
        id='outlined-adornment-password'
        name='password'
        label='Contraseña'
        type={showPassword ? 'text' : 'password'}
        autoComplete='current-password'
        onChange={onHandleChange}
        value={value}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={handleClickShowPassword}
              edge='end'
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      <FormHelperText id='component-error-text'>{error}</FormHelperText>
    </FormControl>
  )
}

InputPassword.propTypes = {
  onHandleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string
}
