import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Grid, Typography } from '@mui/material'
import { useQuery } from '../../hooks'
import { getCheckoutOrder } from '../../helpers'
import { CheckoutStatusLayout } from '../layout/CheckoutStatusLayout'
import { DetailsShop, ItemProduct } from '../../purchases/components'
import { SkeletonCheckout } from '../components'

export const ExecutePaymentPage = () => {
  const orderId = useQuery().get('id')
  if (!orderId) return <Navigate to='/' replace />

  const [loading, setLoading] = useState(true)
  const [order, setOrder] = useState(null)

  useEffect(() => {
    getOrder()
  }, [])

  const getOrder = async () => {
    const order = await getCheckoutOrder({ orderId })

    setOrder(order)
    setLoading(false)
  }

  if (loading) return <SkeletonCheckout />

  if (order === undefined) return <Navigate to='/' replace />

  const { address, amount, id, dateShop, products, delivery } = order
  return (
    <CheckoutStatusLayout title='Gracias por tu compra' boxColor='bg-green-600'>

      <Grid container className='mb-8'>
        <Typography variant='h4' component='h3' className='mb-3'>Detalles de la Compra</Typography>
        <DetailsShop
          shippingAddress={address}
          totalValue={amount}
          value={amount}
          id={id}
          dateShop={dateShop}
          deliveryDay={delivery}
        />
      </Grid>

      <Grid container>
        <Typography variant='h4' component='h3' className='mb-3'>Artículos Comprados</Typography>
        <Grid
          container
          className='flex-col gap-5 p-4 bg-white'
        >
          {
            products.map(({ _id, thumbnail, name, value, quantity }) => {
              return (
                <ItemProduct
                  key={_id}
                  name={name}
                  thumbnail={thumbnail}
                  value={value}
                  amount={quantity}
                />
              )
            })
          }
        </Grid>
      </Grid>

    </CheckoutStatusLayout>
  )
}
