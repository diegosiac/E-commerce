import { Grid, Typography } from '@mui/material'
import { ItemPurchases } from '../components'
import { PurchasesLayout } from '../layout/PurchasesLayout'

export const PurchasesPage = () => {
  const isExistItems = true
  const data = [
    {
      id: '99283jf239oa8',
      value: 132,
      dateShop: '2 de junio de 2023',
      products: [
        {
          urlImg: 'https://m.media-amazon.com/images/I/51JY0jJhPAL._SY90_.jpg',
          title: 'Harina Organicaa',
          value: 132
        }
      ],
      deliveryDay: 'Entregado el 2 de junio de 2023'
    },
    {
      id: 'h8293f09h',
      value: 234,
      dateShop: '2 de junio de 2023',
      products: [
        {
          urlImg: 'https://m.media-amazon.com/images/I/51JY0jJhPAL._SY90_.jpg',
          title: 'Harina Organicaa'
        },
        {
          urlImg: 'https://m.media-amazon.com/images/I/51JY0jJhPAL._SY90_.jpg',
          title: 'Organicaa'
        }
      ],
      deliveryDay: 'Entrega estimada para el mar, 13 jun'
    }
  ]

  return (
    <PurchasesLayout title='Mis Compras'>
      <Grid
        container
        className='min-h-[250px] flex-col gap-5 mt-5'
      >
        {
            isExistItems
              ? data.map(({ id, value, dateShop, products, deliveryDay }) => {
                return (
                  <ItemPurchases
                    key={id}
                    id={id}
                    value={value}
                    dateShop={dateShop}
                    products={products}
                    deliveryDay={deliveryDay}
                  />
                )
              })
              : <Grid
                  container
                  bgcolor='white'
                  className='mt-5 rounded-xl min-h-[200px] justify-center items-center'
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
