import { Grid } from '@mui/material'
import { ItemProduct } from './ItemProduct'
import { CartLayout } from '../layout/CartLayout'

export const Cart = () => {
  return (
    <CartLayout
      title='Productos'
      className='flex-col px-5 pb-5'
    >
      <Grid container>

        <ItemProduct />
        <ItemProduct />
        <ItemProduct />

      </Grid>
    </CartLayout>
  )
}
