import { Grid, Typography } from '@mui/material'
import { useCartStore } from '../../hooks'
import { PurchasesLayout } from '../layout/PurchasesLayout'
import { ItemPurchases } from '../components'

export const PurchasesPage = () => {
  const { pucharses } = useCartStore()

  return (
    <PurchasesLayout title='Mis Compras'>
      <Grid
        container
        className='min-h-[250px] flex-col gap-5 mt-5'
      >
        {
          pucharses.length > 0
            ? pucharses.map(({ id, amount, products, dateShop, delivery }) => {
              return (
                <ItemPurchases
                  key={id}
                  id={id}
                  value={amount}
                  products={products}
                  dateShop={dateShop}
                  delivery={delivery}
                />
              )
            })
            : <Grid
                container
                bgcolor='white'
                className='mt-5 rounded-lg min-h-[200px] justify-center items-center'
              >
              <Typography
                variant='h4'
                component='span'
                className='text-neutral-400'
              >
                Aún no ha hecho una compra
              </Typography>
              </Grid>
        }
      </Grid>
    </PurchasesLayout>
  )
}
