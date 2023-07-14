import PropTypes from 'prop-types'
import { Button, CircularProgress } from '@mui/material'

export const InputLoding = ({ loading, text, className, disabled, ...props }) => {
  return (
    <Button
      variant='contained'
      color='success'
      className={`bg-[#3483fa] ${className}`}
      aria-label={text}
      fullWidth
      disabled={loading || disabled}
      {...props}
    >
      {loading && <CircularProgress size={25} className='text-[#686868]' />}
      {!loading && text}
    </Button>
  )
}

InputLoding.defaultProps = {
  loading: false,
  text: 'Enviar'
}

InputLoding.propTypes = {
  loading: PropTypes.bool.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  text: PropTypes.string
}
