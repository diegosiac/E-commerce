import { Box, Grid, Typography } from '@mui/material'
import { CardProduct } from '../../product/components'

export const HomePage = () => {
  return (
    <Grid
      container
      className='justify-center flex-col items-center'
    >
      <Box className='m-5 md:m-7 w-11/12 h-72'>
        <img
          src='../../assets/imgs/logos/presentation.jpg'
          alt='Presentación Geek Mobile Repair'
          className='w-full h-full object-cover'
        />
      </Box>

      <Grid
        container
        className='w-11/12 mb-5'
      >
        <Box className='flex mb-8'>
          <Box className='w-2 h-full bg-[#3483fa] mr-2' />
          <Typography variant='h3' component='h2'>Todos Nuestros Productos y Servicios</Typography>
        </Box>

        <Grid
          container
          className='justify-evenly gap-6'
        >

          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />

        </Grid>

      </Grid>

    </Grid>
  )
}
