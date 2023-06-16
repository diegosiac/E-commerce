import PropTypes from 'prop-types'
import { Grid } from '@mui/material'
import { ItemProduct } from './ItemProduct'
import { CartLayout } from '../layout/CartLayout'

export const Cart = ({ products }) => {
  return (
    <CartLayout
      title='Productos'
      className='flex-col px-5 pb-5'
    >
      <Grid container>
        {
          products.map(({ id, name, price, stock, urlImg }) => (
            <ItemProduct
              key={id}
              name={name}
              price={price}
              stock={stock}
              urlImg={urlImg}
            />
          ))
        }
      </Grid>
    </CartLayout>
  )
}

Cart.propTypes = {
  products: PropTypes.array.isRequired
}
