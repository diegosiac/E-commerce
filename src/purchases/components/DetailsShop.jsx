import PropTypes from 'prop-types'
import { Box, Grid, Typography } from '@mui/material'
import { RowShop } from './'
import { STATUSDELIVERY, getDayTranform } from '../../helpers'

export const DetailsShop = ({ id, shippingAddress, totalValue, value, dateShop, deliveryDay }) => {
  const { country, zip, state, name, lastName, firtsLine, cologne, city } = shippingAddress

  const dateShopDay = getDayTranform(dateShop)
  const dateDeliveryDay = getDayTranform(deliveryDay.date)

  const isCompleteDelivery = deliveryDay.status === STATUSDELIVERY.COMPLETE ? 'Entregado el' : 'Se entrega el'

  return (
    <Grid container className='bg-white'>
      <Box className='flex p-2 gap-5 border-b border-solid w-full'>
        <Typography component='h5'>Pedido el {dateShopDay}</Typography>
        <Typography component='h5'>{`${isCompleteDelivery} ${dateDeliveryDay}`}</Typography>
        <Typography component='h5'>Pedido n.º {id}</Typography>
      </Box>

      <Grid
        container
        className='justify-between flex-wrap p-4 gap-5 border-b border-solid'
      >
        <Box className='max-w-[250px] [&>span]:block'>
          <Typography
            variant='subtitle3'
            component='h5'
            className='mb-1'
          >Dirección de envío
          </Typography>

          <Typography
            className='mt-1'
            component='span'
          >{`${name} ${lastName}`}
          </Typography>
          <Typography component='span'>{firtsLine}</Typography>
          <Typography component='span'>{cologne}</Typography>
          <Typography component='span'>{city}</Typography>
          <Typography component='span'>{`${country}, ${zip}, ${state}`}</Typography>
        </Box>

        <Box>
          <Typography
            variant='subtitle3'
            component='h5'
            className='block mb-1'
          >Resumen del pedido
          </Typography>

          <RowShop label='Productos' value={totalValue} />
          <RowShop label='Envío' value='Gratis' colorValue='#00a650' />
          <RowShop label='Subtotal' value={totalValue} />
          <RowShop
            label='Total (IVA incluido, en caso de ser aplicable)'
            value={`$ ${value}`}
            strong
          />
        </Box>
      </Grid>
    </Grid>
  )
}

DetailsShop.proptypes = {
  id: PropTypes.string.isRequired,
  shippingAddress: PropTypes.object.isRequired,
  totalValue: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  dateShop: PropTypes.string.isRequired,
  deliveryDay: PropTypes.object.isRequired
}
