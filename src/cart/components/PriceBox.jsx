import { Button, Container, Grid } from '@mui/material'
import { CartLayout } from '../layout/CartLayout'
import { Prices } from './Prices'

export const PriceBox = () => {
  const totalProducts = 5
  const totalPrice = 2524

  return (
    <CartLayout title='Resumen de compra' className='w-80 self-start px-7 pb-7'>
      <Grid container>
        <Prices
          title={`Productos (${totalProducts})`}
          value={`$ ${totalPrice}`}
          classTitle='text-sm'
          classValue='text-sm'
        />
        <Prices
          title='Envío'
          value='Gratis'
          classTitle='text-sm'
          classValue='text-[#00a650] text-base'
        />
        <Prices
          title='Total'
          value={`$ ${totalPrice}`}
          classTitle='text-base font-semibold'
          classValue='text-base font-semibold'
        />

        <Container className='flex justify-center p-0'>
          <Button
            variant='contained'
            color='success'
            className='bg-[#3483fa] w-full'
          >
            Continuar compra
          </Button>
        </Container>
      </Grid>
    </CartLayout>
  )
}
