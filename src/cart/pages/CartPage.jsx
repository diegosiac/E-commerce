import { Grid } from '@mui/material'
import { useAuthStore } from '../../hooks'
import { Cart, PriceBox } from '../components'

export const CartPage = () => {
  const { user } = useAuthStore()
  const products = user.basket?.products || []

  return (
    <Grid container component='div' className='justify-center my-10'>

      <Grid item className='flex gap-4 md:flex-nowrap flex-wrap w-11/12'>
        <Cart products={products} />
        <PriceBox products={products} />
      </Grid>

    </Grid>
  )
}
