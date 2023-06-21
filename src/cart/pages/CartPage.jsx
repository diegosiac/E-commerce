import { Grid } from '@mui/material'
import { useCartStore } from '../../hooks'
import { Cart, PriceBox } from '../components'

export const CartPage = () => {
  const { basket } = useCartStore()
  const products = basket?.products || []
  return (
    <Grid container component='div' className='justify-center my-10'>

      <Grid item className='flex gap-4 md:flex-nowrap flex-wrap w-11/12'>
        <Cart products={products} />
        {
          products.length !== 0 &&
            <PriceBox products={products} />
        }
      </Grid>

    </Grid>
  )
}
