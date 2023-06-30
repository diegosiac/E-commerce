import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@mui/material'
import { ItemProduct } from './ItemProduct'
import { CartLayout } from '../layout/CartLayout'
import { setBasket } from '../../store/cart'

export const Cart = ({ products }) => {
  const dispatch = useDispatch()

  const updateQuantityProducts = async ({ index, value, id }) => {
    const newBasket = products.map((product, i) => {
      if (i === index) {
        return {
          ...product,
          quantity: value
        }
      }
      return product
    })

    dispatch(setBasket({ newBasket, id }))
  }

  const deleteProductItem = ({ index, id }) => {
    const newBasket = products.filter((_, i) => i !== index)

    dispatch(setBasket({ newBasket, id }))
  }

  return (
    <CartLayout
      title='Productos'
      className='flex-col px-5 pb-5'
    >
      <Grid container className='justify-center items-center min-h-[200px]'>
        {
          products.map(({ id, ...product }, index) => (
            <ItemProduct
              key={id}
              id={id}
              index={index}
              updateQuantityProducts={updateQuantityProducts}
              deleteProductItem={deleteProductItem}
              {...product}
            />
          ))
        }
        {
          products.length === 0 &&
            <Grid className='text-center'>
              <Typography variant='h4' component='span' className='text-gray-500 block'>Tu carrito está vacío</Typography>
              <Typography component='span' className='text-gray-500 block'>¡Los mejores productos tecnológicos te esperan!</Typography>
            </Grid>
        }
      </Grid>
    </CartLayout>
  )
}

Cart.propTypes = {
  products: PropTypes.array.isRequired
}
