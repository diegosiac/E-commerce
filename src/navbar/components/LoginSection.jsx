import { useNavigate } from 'react-router-dom'
import Proptypes from 'prop-types'
import { Box, Button } from '@mui/material'

export const LoginSection = ({ setState }) => {
  const navigate = useNavigate()
  const onChangePageLogin = () => {
    setState(false)
    navigate('/auth/login', { replace: true })
  }
  const onChangePageRegister = () => {
    setState(false)
    navigate('/auth/register', { replace: true })
  }
  return (
    <Box
      className='flex justify-center absolute bottom-5 left-[50%] translate-x-[-50%]'
    >
      <Button
        variant='contained'
        className='m-4 bg-[#3483fa] whitespace-nowrap'
        color='success'
        onClick={onChangePageLogin}
      >
        Iniciar sesión
      </Button>
      <Button
        variant='contained'
        className='m-4 bg-[#3483fa] whitespace-nowrap'
        color='success'
        onClick={onChangePageRegister}
      >
        Registrarse
      </Button>
    </Box>
  )
}

LoginSection.proptypes = {
  setState: Proptypes.func.isRequired
}
