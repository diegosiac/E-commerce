import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Box, Button, Divider, Grid, IconButton, Skeleton, Typography } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import { InputLoding } from '../../auth/components'
import { STATUS } from '../../store/cart/options'
import { formaterValue } from '../../helpers'

export const ContendProductPage = ({ name, value, stock, thumbnail, description, isLoading, handleAddToBasket, status, statusProduct, isAuthenticated }) => {
  const textStock = stock > 1 ? `${stock} diponibles` : 'Última disponible'
  const isCheking = status === STATUS.CHECKING

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
          <IconButton LinkComponent={Link} to='/' aria-label='Volver'>
            <ArrowBack fontSize='medium' />
          </IconButton>
        </Box>

        <Grid
          item
          className='md:flex items-start'
        >

          {
            isLoading
              ? <Grid className='flex justify-center min-w-[300px]'>
                <Skeleton variant='rectangular' className='w-[280px] h-48' />
                </Grid>
              : <picture className='flex justify-center min-w-[300px] '>
                <img src={thumbnail} alt={name} className='w-60' />
              </picture>
          }

          <Divider orientation='vertical' flexItem className='ml-1 mr-5 hidden md:block' />

          <Box className='flex-grow'>
            {
              isLoading
                ? (
                  <>
                    <Skeleton className='h-7' />
                    <Skeleton className='w-2/4 h-7' />
                  </>
                  )
                : <Typography
                    variant='h3'
                    component='h1'
                  >
                  {name}
                </Typography>
            }

            {
              isLoading
                ? <Skeleton className='w-24 mt-4 h-7' />
                : <Typography
                    variant='h3'
                    component='span'
                    className='mt-3 block'
                  >
                  {`${formaterValue(value)} MXN`}
                  </Typography>
            }

            {
              isLoading
                ? <Skeleton className='w-32 mt-7' />
                : <Typography
                    variant='h4'
                    component='span'
                    className='mt-6 block'
                  >
                  Stock disponible
                  </Typography>
            }

            {
              isLoading
                ? <Skeleton className='w-20' />
                : <Typography
                    variant='subtitle1'
                    component='span'
                    className='block'
                  >
                  {textStock}
                  </Typography>
            }
            {
              isAuthenticated
                ? <InputLoding
                    loading={isLoading || isCheking}
                    text={statusProduct ? 'EL PRODUCTO YA ESTA EN EL CARRITO' : 'AGREGAR AL CARRITO'}
                    className='font-bold bg-[#3483fa] mt-4'
                    onClick={handleAddToBasket}
                    disabled={statusProduct}
                  />
                : <Button
                    variant='contained'
                    color='success'
                    className='bg-[#3483fa] font-bold mt-4'
                    aria-label='AGREGAR AL CARRITO'
                    LinkComponent={Link}
                    to='/auth'
                    fullWidth
                  >AGREGAR AL CARRITO
                  </Button>
            }
          </Box>

        </Grid>

      </Grid>

      <Grid
        item
        className='p-5 w-full md:w-10/12 md:rounded-md md:mt-6 max-w-[750px]'
        bgcolor='white'
      >
        {
              isLoading
                ? <Skeleton className='w-44 h-7' />
                : <Typography
                    variant='h4'
                    component='h4'
                    className='mb-3'
                  >
                  Información Del Producto
                  </Typography>
            }{
              isLoading
                ? (
                  <>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                  </>
                  )
                : <Typography
                    variant='body1'
                    component='p'
                    color='grey.800'
                  >
                  {description}
                  </Typography>
            }

      </Grid>

    </Grid>
  )
}

ContendProductPage.proptypes = {
  name: PropTypes.string,
  value: PropTypes.number,
  stock: PropTypes.number,
  thumbnail: PropTypes.string,
  description: PropTypes.string,
  handleAddToBasket: PropTypes.func,
  isLoading: PropTypes.bool,
  isAuthenticated: PropTypes.bool
}
