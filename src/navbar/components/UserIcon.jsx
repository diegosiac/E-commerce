import { useNavigate } from 'react-router-dom'
import Proptypes from 'prop-types'
import { Avatar, Box, IconButton, Typography } from '@mui/material'

export const UserIcon = ({ userName, to }) => {
  const navigate = useNavigate()
  const onChangePage = () => navigate(to, { replace: true })
  return (
    <Box className='hidden md:block'>
      <IconButton
        color='success'
        onClick={onChangePage}
        className='flex flex-col mr-2'
      >
        <Avatar
          className='bg-[#3483fa] w-8 h-8'
          alt={userName}
          src='none'
        />
        <Typography
          className='text-sm text-white'
          component='span'
        >
          {userName}
        </Typography>
      </IconButton>
    </Box>
  )
}

UserIcon.proptypes = {
  userName: Proptypes.string.isRequired,
  to: Proptypes.string.isRequired
}
