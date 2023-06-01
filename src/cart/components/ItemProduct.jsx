import { Box, Button, Container, Grid, Typography } from '@mui/material'
import PropTypes from 'prop-types'

export const ItemProduct = ({ name, urlImg, price, totalProduct }) => {
  const onInputChange = () => {}
  return (
    <Container
      component='section'
      className='flex flex-wrap py-3 border-b-[1px] border-[#dadada]'
    >

      <Grid
        component='article'
        className='flex pb-5 w-full lg:w-max mr-16'
      >
        <img src={urlImg} alt={name} className='h-16' />
        <Grid item className='flex justify-between flex-col items-start ml-2'>
          <Typography
            variant='h4'
            component='span'
            className='whitespace-nowrap'
          >
            {name}
          </Typography>
          <Button
            // disabled={isCheckingAuthentication}
            type='submit'
            color='success'
            className='p-0'
          >
            Eliminar
          </Button>
        </Grid>

      </Grid>

      <Box className='flex flex-col ml-0'>
        <Grid className='border-[1px] flex'>
          <Button className='min-w-[35px] text-[#3483fa] text-lg'>-</Button>
          <input value='10' onChange={onInputChange} className='w-11 p-0 text-center outline-none' />
          <Button className='min-w-[35px] text-[#3483fa] text-lg'>+</Button>
        </Grid>
        <Typography
          component='span'
          className='whitespace-nowrap text-center text-[#999] mt-2'
        >
          {totalProduct} disponibles
        </Typography>
      </Box>

      <Typography
        variant='subtitle1'
        component='span'
        className='whitespace-nowrap text-end flex-grow'
      >
        $ {price}
      </Typography>

    </Container>
  )
}

ItemProduct.propTypes = {
  name: PropTypes.string.isRequired,
  urlImg: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  totalProduct: PropTypes.number.isRequired
}

ItemProduct.defaultProps = {
  name: 'Teemo abeja',
  urlImg: 'https://diegoadc.github.io/PROYECTO-2/img/teemo-abeja.jpg',
  price: 1340,
  totalProduct: 4
}
