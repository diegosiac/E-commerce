import PropTypes from 'prop-types'
import { Button, CircularProgress } from '@mui/material'

export const InputLoding = ({ loading, text }) => {
  return (
    <Button
      type='submit'
      variant='contained'
      color='success'
      className='bg-[#3483fa]'
      fullWidth
      disabled={loading}
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
  text: PropTypes.string
}
