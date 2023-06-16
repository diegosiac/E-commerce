import { Link } from 'react-router-dom'
import Proptypes from 'prop-types'
import { Avatar, Box, IconButton, Typography } from '@mui/material'
import { Settings } from '@mui/icons-material'

export const CardProfile = ({ setState, nameUser }) => {
  const onChangePage = () => {
    setState(false)
  }

  return (
    <Box className='flex justify-between pl-4 absolute bottom-5 w-5/6 ml-4'>
      <Box className='flex'>
        <Avatar
          className='bg-cyan-800 w-12 h-12'
          alt={nameUser}
          src='none'
        />
        <Typography
          variant='subtitle1'
          component='span'
          className='ml-3'
        >
          Bienvenido {nameUser}
        </Typography>
      </Box>
      <IconButton onClick={onChangePage} LinkComponent={Link} to='/profile'>
        <Settings className='text-3xl' />
      </IconButton>
    </Box>
  )
}

CardProfile.proptypes = {
  setState: Proptypes.func.isRequired,
  nameUser: Proptypes.string.isRequired
}
