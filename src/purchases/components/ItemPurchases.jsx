import PropTypes from 'prop-types'
import { Grid, Typography } from '@mui/material'
import { formaterValue, getDayTranform, STATUSDELIVERY } from '../../helpers'
import { ItemProduct, TitleInfo } from './'

export const ItemPurchases = ({ id, value, dateShop, products, delivery }) => {
  const dateShopDay = getDayTranform(dateShop)
  const dateDeliveryDay = getDayTranform(delivery.date)

  const isCompleteDelivery = delivery.status === STATUSDELIVERY.COMPLETE ? 'Se entrego el' : 'Fecha estimada de entrega'

  return (
    <Grid
      container
      elevation={2}
      bgcolor='white'
      className='rounded-lg min-h-[200px] min-w-[350px] flex-col pb-4'
    >
      <Grid
        container
        className='justify-between p-2 border-b border-solid flex-nowrap gap-3'
      >
        <TitleInfo
          title='PEDIDO REALIZADO'
          value={dateShopDay}
        />

        <TitleInfo
          title='TOTAL'
          className='whitespace-nowrap'
          value={`${formaterValue(value)} MXN`}
        />

        <TitleInfo
          title={`PEDIDO N.º ${id}`}
          className='text-right'
          value='Ver detalles del pedido'
          link
          to={`order-details?id=${id}`}
        />
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
          products.map(({ _id, thumbnail, name, value, quantity }) => {
            return (
              <ItemProduct
                key={_id}
                name={name}
                thumbnail={thumbnail}
                value={value}
                quantity={quantity}
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
  delivery: PropTypes.string.isRequired
}
