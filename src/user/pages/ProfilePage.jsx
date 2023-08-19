import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Avatar, Box, Button, Grid, Typography } from '@mui/material'
import IosShareIcon from '@mui/icons-material/IosShare'
import { useAuthStore } from '../../hooks'
import { startLogout } from '../../store/auth'
import { SectionItems, SectionProfile } from '../components'

export const ProfilePage = () => {
  const { user } = useAuthStore()
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(startLogout())
  }

  return (
    <Grid
      container
      className='justify-center'
    >
      <Grid
        className='w-10/12 max-w-[550px] my-5'
      >
        <Box
          bgcolor='white'
          className='flex p-5'
        >
          <Avatar
            className='w-14 h-14 mr-5 bg-cyan-800'
            alt={user.name}
            src='/broken-image.jpg'
          />
          <Typography
            variant='h4'
            component='span'
            data-testid='CardUserName'
          >
            Hola {user.name}
          </Typography>
        </Box>

        <Grid
          className='mt-5'
          component='section'
        >
          <SectionProfile title='Mis Datos'>
            <SectionItems data-testid='InfoUserName' title='Nombre' desc={user.name} />
            <SectionItems title='Correo' desc={user.email} />
          </SectionProfile>

          <SectionProfile title='Mis Compras'>
            <Button
              startIcon={<IosShareIcon className='text-neutral-600' />}
              variant='text'
              fullWidth
              className='flex justify-start items-center'
              LinkComponent={Link}
              aria-label='IR A MIS COMPRAS'
              title='IR A MIS COMPRAS'
              to='/my_purchases'
            >
              IR A MIS COMPRAS
            </Button>
          </SectionProfile>

          <Button
            variant='contained'
            className='flex justify-start mt-12 bg-[#f44336]'
            color='error'
            aria-label='Cerrar Sesión'
            onClick={handleLogout}
          >
            Cerrar Sesión
          </Button>
        </Grid>

      </Grid>
    </Grid>
  )
}
