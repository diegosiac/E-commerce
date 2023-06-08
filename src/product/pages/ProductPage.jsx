import { Link } from 'react-router-dom'
import { Button, Grid, Typography, IconButton, Box, Divider } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'

export const ProductPage = () => {
  const imgURL = '../../assets/imgs/placaBase.jpg'
  const title = 'Harina Organicaa'
  const price = 5
  const infoProduct = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ipsam modi itaque, a optio cum corrupti cumque similique accusantium velit! Temporibus culpa aliquam aut, ipsa recusandae officiis quas veritatis neque. '

  return (
    <Grid
      container
      className='justify-center md:py-7'
    >
      <Grid
        className='px-5 pb-5 w-full md:w-10/12 md:rounded-md max-w-[750px]'
        bgcolor='white'
      >
        <Box
          className='mt-2'
        >
          <IconButton LinkComponent={Link} to='/'>
            <ArrowBack fontSize='medium' />
          </IconButton>
        </Box>

        <Grid
          item
          className='md:flex items-start'
        >
          <picture className='flex justify-center'>
            <img src={imgURL} alt={title} className='w-60' />
          </picture>

          <Divider orientation='vertical' flexItem className='ml-1 mr-5 hidden md:block' />

          <Box>
            <Typography
              variant='h2'
              component='h1'
            >
              {title}
            </Typography>

            <Typography
              variant='h2'
              component='span'
              className='my-6 block'
            >
              {`$ ${price.toFixed(2)}`}
            </Typography>

            <Button
              variant='contained'
              size='large'
              color='success'
              className='font-bold bg-[#3483fa] mt-4'
              fullWidth
            >
              AGREGAR AL CARRITO
            </Button>

          </Box>

        </Grid>

      </Grid>

      <Grid
        item
        className='p-5 w-full md:w-10/12 md:rounded-md md:mt-6 max-w-[750px]'
        bgcolor='white'
      >
        <Typography
          variant='h4'
          component='h4'
          className='mb-3'
        >
          Información Del Producto
        </Typography>
        <Typography
          variant='body1'
          component='p'
          color='grey.800'
          className='max-w-lg'
        >
          {infoProduct}
        </Typography>

      </Grid>

    </Grid>
  )
}
