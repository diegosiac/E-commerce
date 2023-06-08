import PropTypes from 'prop-types'
import { Box, Grid, Typography } from '@mui/material'
import { ItemProduct, TitleInfo } from './'

export const ItemPurchases = ({ id, value, dateShop, products, deliveryDay }) => {
  return (
    <Grid
      container
      elevation={2}
      bgcolor='white'
      className='rounded-lg min-h-[200px] min-w-[350px] flex-col pb-4'
    >
      <Grid
        container
        className='justify-between p-3 border-b border-solid flex-nowrap whitespace-nowrap'
      >
        <Box className='flex gap-5'>
          <TitleInfo title='PEDIDO REALIZADO' value={dateShop} />
          <TitleInfo title='TOTAL' value={`$${value}`} />
        </Box>

        <Box className='text-right ml-3'>
          <TitleInfo
            title={`PEDIDO N.º ${id}`}
            value='Ver detalles del pedido'
            link
            to='order-details'
          />
        </Box>
      </Grid>

      <Typography
        variant='h4'
        component='span'
        className='pt-3 pl-3'
      >
        {deliveryDay}
      </Typography>

      <Grid
        container
        className='px-3 mt-3 flex-col gap-2'
      >
        {
          products.map(({ urlImg, title }) => {
            return (
              <ItemProduct
                key={title}
                title={title}
                urlImg={urlImg}
              />
            )
          })
        }
      </Grid>
    </Grid>
  )
}

ItemPurchases.proptypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  dateShop: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
  deliveryDay: PropTypes.string.isRequired
}
