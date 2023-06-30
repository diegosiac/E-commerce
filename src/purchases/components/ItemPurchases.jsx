import PropTypes from 'prop-types'
import { Box, Grid, Typography } from '@mui/material'
import { getDayTranform, STATUSDELIVERY } from '../../helpers'
import { ItemProduct, TitleInfo } from './'

export const ItemPurchases = ({ id, value, dateShop, products, deliveryDay }) => {
  const dateShopDay = getDayTranform(dateShop)
  const dateDeliveryDay = getDayTranform(deliveryDay.date)

  const isCompleteDelivery = deliveryDay.status === STATUSDELIVERY.COMPLETE ? 'Se entrego el' : 'Fecha estimada de entrega'

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
          <TitleInfo title='PEDIDO REALIZADO' value={dateShopDay} />
          <TitleInfo title='TOTAL' value={`$${value}`} />
        </Box>

        <Box className='text-right ml-3'>
          <TitleInfo
            title={`PEDIDO N.º ${id}`}
            value='Ver detalles del pedido'
            link
            to={`order-details?id=${id}&list=5`}
          />
        </Box>
      </Grid>

      <Typography
        variant='h4'
        component='span'
        className='pt-3 pl-3'
      >
        {`${isCompleteDelivery} ${dateDeliveryDay}`}
      </Typography>

      <Grid
        container
        className='px-3 mt-3 flex-col gap-2'
      >
        {
          products.map(({ id, ...props }) => {
            return (
              <ItemProduct
                key={id}
                {...props}
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
