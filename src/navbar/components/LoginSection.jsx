import { Link } from 'react-router-dom'
import Proptypes from 'prop-types'
import { Box, Button } from '@mui/material'

export const LoginSection = ({ toggleDrawer }) => {
  return (
    <Box
      className='flex justify-center absolute bottom-5 left-[50%] translate-x-[-50%]'
    >
      <Button
        variant='contained'
        className='m-4 bg-[#3483fa] whitespace-nowrap'
        color='success'
        LinkComponent={Link}
        to='/auth/login'
        onClick={toggleDrawer()}
        aria-label='Iniciar sesión'
        title='Iniciar sesión'
      >
        Iniciar sesión
      </Button>
      <Button
        variant='contained'
        className='m-4 bg-[#3483fa] whitespace-nowrap'
        color='success'
        LinkComponent={Link}
        to='/auth/register'
        onClick={toggleDrawer()}
        aria-label='Registrarse'
        title='Registrarse'
      >
        Registrarse
      </Button>
    </Box>
  )
}

LoginSection.proptypes = {
  toggleDrawer: Proptypes.func.isRequired
}
