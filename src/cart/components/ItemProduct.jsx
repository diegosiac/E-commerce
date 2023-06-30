import PropTypes from 'prop-types'
import { Box, Button, CircularProgress, Container, Grid, Typography } from '@mui/material'
import { useCartStore } from '../../hooks'
import { STATUS } from '../../store/cart'

export const ItemProduct = ({ id, index, name, thumbnail, price, stock, quantity, updateQuantityProducts, deleteProductItem }) => {
  const msgStock = stock === 1 ? 'Último disponible' : `${stock} disponibles`
  const handleDecrease = () => {
    updateQuantityProducts({ index, value: quantity - 1, id })
  }

  const handleIncrease = () => {
    updateQuantityProducts({ index, value: quantity + 1, id })
  }

  const handleProductItem = () => {
    deleteProductItem({ index, id })
  }

  const { status, idCheking } = useCartStore()

  const isStatusChecking = status === STATUS.CHECKING
  const isUpdateItem = isStatusChecking && id === idCheking

  return (
    <Container
      component='section'
      className='flex flex-wrap py-3 border-b-[1px] border-[#dadada]'
    >
      <Grid
        component='article'
        className='flex pb-5 w-full lg:w-max mr-16'
      >
        <img src={thumbnail} alt={name} className='h-16' />
        <Grid item className='flex justify-between flex-col items-start ml-2'>
          <Typography
            variant='h4'
            component='span'
            className='whitespace-nowrap'
          >
            {name}
          </Typography>
          <Button
            type='submit'
            color='success'
            className='p-0'
            onClick={handleProductItem}
            disabled={isStatusChecking}
            title='Eliminar'
            aria-label='Eliminar'
          >
            Eliminar
          </Button>
        </Grid>

      </Grid>

      <Box className='flex flex-col'>

        <Grid className='flex border-[1px] w-min' component='form'>
          <Button
            onClick={handleDecrease}
            className='min-w-[35px] text-[#3483fa] text-lg'
            disabled={quantity <= 1 || isStatusChecking}
            arial-label='Agregar una unidad'
          >-
          </Button>
          <span
            className='flex items-center justify-center w-11 relative'
          >
            {quantity}
            {
              isUpdateItem &&
                <CircularProgress
                  className='text-[#3483fa] absolute'
                  style={{ width: 30, height: 30 }}
                />
            }
          </span>
          <Button
            onClick={handleIncrease}
            className='min-w-[35px] text-[#3483fa] text-lg'
            disabled={quantity >= stock || isStatusChecking}
            arial-label='Quitar una unidad'
          >+
          </Button>
        </Grid>

        <Typography
          component='span'
          className={`whitespace-nowrap text-center text-[#999] mt-2 ${quantity === 0 || quantity > stock ? 'text-[#f23d4f]' : ''}`}
        >
          {
            quantity === 0
              ? 'Puedes comprar desde 1 u'
              : quantity > stock
                ? `Puedes comprar hasta ${stock} u.`
                : msgStock
          }
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
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  updateQuantityProducts: PropTypes.func.isRequired,
  deleteProductItem: PropTypes.func.isRequired
}
