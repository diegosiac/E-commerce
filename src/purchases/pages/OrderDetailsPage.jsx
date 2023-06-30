import { Grid } from '@mui/material'
import { useCartStore, useQuery } from '../../hooks'
import { getOrder } from '../../helpers'
import { PurchasesLayout } from '../layout/PurchasesLayout'
import { DetailsShop, ItemProduct } from '../components'

export const OrderDetailsPage = () => {
  const { pucharses } = useCartStore()
  const query = useQuery()

  const queryId = query.get('id')

  const { id, products, value, dateShop, deliveryDay, shippingAddress } = getOrder(queryId, pucharses)

  const costProducts = products.reduce((accum, item) => accum + item.value, 0)

  return (
    <PurchasesLayout title='Detalles de la Compra'>
      <Grid
        container
        className='flex-col mt-5'
      >
        <DetailsShop
          dateShop={dateShop}
          deliveryDay={deliveryDay}
          id={id}
          shippingAddress={shippingAddress}
          totalValue={`$ ${costProducts}`}
          value={value}
        />

        <Grid
          container
          className='flex-col gap-5 p-4 bg-white'
        >
          {
            products.map(({ id, ...props }) => {
              return (
                <ItemProduct
                  key={id}
                  id={id}
                  {...props}
                />
              )
            })
          }
        </Grid>

      </Grid>
    </PurchasesLayout>
  )
}
