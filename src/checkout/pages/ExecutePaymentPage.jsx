import { Grid, Typography } from '@mui/material'
import { CheckoutStatusLayout } from '../layout/CheckoutStatusLayout'
import { DetailsShop, ItemProduct } from '../../purchases/components'

export const ExecutePaymentPage = () => {
  const shoppingDay = '22 de mayo de 2023'
  const id = '702-9971393-4082604'
  const delivery = 'Entregado el 29 may. 2023'

  const addressFullName = 'Diego Cruz Vázquez'
  const addressLine1 = 'Calle 4 MZ 31 lt 26'
  const addressLine2 = 'VALLE DE LOS REYES'
  const addressCityOrRegionPC = 'LOS REYES ACAQUILPAN (LA PAZ), MEXICO, 56430'
  const products = [
    {
      urlImg: 'https://m.media-amazon.com/images/I/51JY0jJhPAL._SY90_.jpg',
      title: 'Harina Organicaa',
      value: 132,
      amount: 2
    },
    {
      urlImg: 'https://m.media-amazon.com/images/I/51JY0jJhPAL._SY90_.jpg',
      title: 'Placa base de datos',
      value: 234,
      amount: 5
    }
  ]
  return (
    <CheckoutStatusLayout title='Gracias por tu compra' boxColor='#00a650'>

      <Grid container className='mb-8'>
        <Typography variant='h4' component='h3' className='mb-3'>Detalles De La Compra</Typography>
        <DetailsShop
          shoppingDay={shoppingDay}
          id={id}
          delivery={delivery}
          addressFullName={addressFullName}
          addressLine1={addressLine1}
          addressLine2={addressLine2}
          addressCityOrRegionPC={addressCityOrRegionPC}
        />
      </Grid>

      <Grid container>
        <Typography variant='h4' component='h3' className='mb-3'>Artículos Comprados</Typography>
        <Grid
          container
          className='flex-col gap-5 p-4 bg-white'
        >
          {
            products.map(({ urlImg, title, value, amount }) => {
              return (
                <ItemProduct
                  key={title}
                  title={title}
                  urlImg={urlImg}
                  value={value}
                  amount={amount}
                />
              )
            })
          }
        </Grid>
      </Grid>

    </CheckoutStatusLayout>
  )
}
