import { Link } from 'react-router-dom'
import { Avatar, Box, Button, Grid, Typography } from '@mui/material'
import { SectionItems, SectionProfile } from '../components'

export const ProfilePage = () => {
  const nameUser = 'Diego Cruz'
  const emailUser = 'diego35502@hotmail.com'

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
            alt={nameUser}
            src='/broken-image.jpg'
          />
          <Typography
            variant='h4'
            component='span'
          >
            Hola {nameUser}
          </Typography>
        </Box>

        <Grid
          className='mt-5'
          component='section'
        >
          <SectionProfile title='Mis Datos'>
            <SectionItems title='Nombre' desc={nameUser} />
            <SectionItems title='Correo' desc={emailUser} />
          </SectionProfile>

          <SectionProfile title='Mis Compras'>
            <Button
              variant='text'
              fullWidth
              className='flex justify-start'
              LinkComponent={Link}
              to='/my_purchases'
            >
              • IR A MIS COMPRAS
            </Button>
          </SectionProfile>

          <Button
            variant='contained'
            className='flex justify-start mt-12 bg-[#f44336]'
            color='error'
          >
            Cerrar Sesión
          </Button>
        </Grid>

      </Grid>
    </Grid>
  )
}
