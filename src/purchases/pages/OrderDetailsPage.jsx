import { Box, Grid, Typography } from '@mui/material'
import { PurchasesLayout } from '../layout/PurchasesLayout'
import { ItemProduct, RowShop } from '../components'

export const OrderDetailsPage = () => {
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
      value: 132
    },
    {
      urlImg: 'https://m.media-amazon.com/images/I/51JY0jJhPAL._SY90_.jpg',
      title: 'Placa base de datos',
      value: 234
    }
  ]

  return (
    <PurchasesLayout title='Detalles de la Compra'>
      <Grid
        container
        className='flex-col mt-5'
        bgcolor='white'
      >
        <Box className='flex p-2 gap-5 border-b border-solid'>
          <Typography component='h5'>Pedido el {shoppingDay}</Typography>
          <Typography component='h5'>{delivery}</Typography>
          <Typography component='h5'>Pedido n.º {id}</Typography>
        </Box>

        <Grid
          container
          className='justify-between flex-wrap p-4 gap-5 border-b border-solid'
        >
          <Box className='max-w-[250px]'>
            <Typography
              variant='subtitle3'
              component='h5'
              className='block mb-1'
            >Dirección de envío
            </Typography>

            <Typography className='block mt-1' component='span'>{addressFullName}</Typography>
            <Typography className='block' component='span'>{addressLine1}</Typography>
            <Typography className='block' component='span'>{addressLine2}</Typography>
            <Typography className='block' component='span'>{addressCityOrRegionPC}</Typography>
          </Box>

          <Box>
            <Typography
              variant='subtitle3'
              component='h5'
              className='block mb-1'
            >Resumen del pedido
            </Typography>

            <RowShop label='Productos' value={279} />
            <RowShop label='Envío' value={39} />
            <RowShop label='Subtotal' value={318} />
            <RowShop
              label='Total (IVA incluido, en caso de ser aplicable)'
              value={318}
              strong
            />
          </Box>
        </Grid>

        <Grid
          container
          className='flex-col gap-5 p-4'
        >
          {
            products.map(({ urlImg, title, value }) => {
              return (
                <ItemProduct
                  key={title}
                  title={title}
                  urlImg={urlImg}
                  value={value}
                />
              )
            })
          }
        </Grid>

      </Grid>
    </PurchasesLayout>
  )
}
