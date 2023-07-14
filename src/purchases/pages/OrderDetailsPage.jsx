import { Grid } from '@mui/material'
import { useCartStore, useQuery } from '../../hooks'
import { getOrder } from '../../helpers'
import { PurchasesLayout } from '../layout/PurchasesLayout'
import { DetailsShop, ItemProduct } from '../components'
import { Navigate } from 'react-router-dom'

export const OrderDetailsPage = () => {
  const { pucharses } = useCartStore()
  const query = useQuery()

  const queryId = query.get('id')

  const order = getOrder(queryId, pucharses)

  if (!order) return <Navigate to='/' replace />

  const { id, products, amount, dateShop, delivery, address } = order

  const totalValue = products.reduce((accum, item) => accum + item.value, 0)

  return (
    <PurchasesLayout title='Detalles de la Compra'>
      <Grid
        container
        className='flex-col mt-5'
      >
        <DetailsShop
          dateShop={dateShop}
          deliveryDay={delivery}
          id={id}
          shippingAddress={address}
          totalValue={totalValue}
          value={amount}
        />

        <Grid
          container
          className='flex-col gap-5 p-4 bg-white'
        >
          {
            products.map(({ _id, name, thumbnail, value, amount }) => {
              return (
                <ItemProduct
                  key={_id}
                  name={name}
                  thumbnail={thumbnail}
                  value={value}
                  amount={amount}
                />
              )
            })
          }
        </Grid>

      </Grid>
    </PurchasesLayout>
  )
}
