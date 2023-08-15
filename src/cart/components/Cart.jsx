import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@mui/material'
import { useCartStore } from '../../hooks'
import { setBasket } from '../../store/cart'
import { CartLayout } from '../layout/CartLayout'
import { ItemProductNotAvalible, ItemProduct } from './'

export const Cart = ({ products }) => {
  const { status, idCheking } = useCartStore()
  const dispatch = useDispatch()

  const updateQuantityProducts = ({ index, value, id }) => {
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
      <Grid
        container
        className='justify-center items-center min-h-[200px]'
      >
        {
          products.map(({ id, name, thumbnail, value, stock, quantity }, index) => {
            if (stock === 0) {
              return (
                <ItemProductNotAvalible
                  key={id}
                  id={id}
                  thumbnail={thumbnail}
                  name={name}
                  index={index}
                  status={status}
                  idCheking={idCheking}
                  deleteProductItem={deleteProductItem}
                />
              )
            }

            return (
              <ItemProduct
                key={id}
                id={id}
                index={index}
                name={name}
                thumbnail={thumbnail}
                value={value}
                stock={stock}
                quantity={quantity}
                status={status}
                idCheking={idCheking}
                updateQuantityProducts={updateQuantityProducts}
                deleteProductItem={deleteProductItem}
              />
            )
          })
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
