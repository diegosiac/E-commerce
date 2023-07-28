import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Button, Container, Grid } from '@mui/material'
import { formaterValue } from '../../helpers'
import { CartLayout } from '../layout/CartLayout'
import { Prices } from './Prices'

export const PriceBox = ({ products }) => {
  const totalPrice = products.reduce((accum, product) => accum + (product.value * product.quantity), 0)

  const totalProducts = products.reduce((accum, product) => accum + product.quantity, 0)

  const value = formaterValue(totalPrice)

  return (
    <CartLayout title='Resumen de compra' className='w-80 self-start px-7 pb-7'>
      <Grid container>
        <Prices
          title={`Productos (${totalProducts})`}
          value={value}
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
          value={`${value} MXN`}
          classTitle='text-base font-semibold'
          classValue='text-base font-semibold'
        />

        <Container className='flex justify-center p-0'>
          <Button
            variant='contained'
            color='success'
            className='bg-[#3483fa] w-full'
            LinkComponent={Link}
            aria-label='Continuar compra'
            title='Continuar compra'
            to='/checkout'
          >
            Continuar compra
          </Button>
        </Container>
      </Grid>
    </CartLayout>
  )
}

PriceBox.propTypes = {
  products: PropTypes.array.isRequired
}
