import { useNavigate } from 'react-router-dom'
import Proptypes from 'prop-types'
import { Avatar, Box, IconButton, Typography } from '@mui/material'
import { Settings } from '@mui/icons-material'

export const CardProfile = ({ setState }) => {
  const userName = 'Diego Cruz'
  const navigate = useNavigate()
  const onChangePage = () => {
    setState(false)
    navigate('/profile', { replace: true })
  }

  return (
    <Box className='flex justify-between pl-4 absolute bottom-5 w-5/6 ml-4'>
      <Box className='flex'>
        <Avatar
          className='bg-cyan-800 w-12 h-12'
          alt={userName}
          src='none'
        />
        <Typography
          variant='subtitle1'
          component='span'
          className='ml-3'
        >
          Bienvenido {userName}
        </Typography>
      </Box>
      <IconButton onClick={onChangePage}>
        <Settings className='text-3xl' />
      </IconButton>
    </Box>
  )
}

CardProfile.proptypes = {
  setState: Proptypes.func.isRequired
}
