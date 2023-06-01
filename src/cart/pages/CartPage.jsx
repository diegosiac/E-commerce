import { Grid } from '@mui/material'
import { Cart, PriceBox } from '../components'

export const CartPage = () => {
  return (
    <Grid container component='main' className='justify-center'>

      <Grid item className='flex gap-4 md:flex-nowrap flex-wrap w-11/12'>
        <Cart />
        <PriceBox />
      </Grid>

    </Grid>
  )
}
