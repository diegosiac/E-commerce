import PropTypes from 'prop-types'
import { Box, Grid, Typography } from '@mui/material'
import { RowShop } from './'

export const DetailsShop = ({ shoppingDay, delivery, id, addressFullName, addressLine1, addressLine2, addressCityOrRegionPC }) => {
  return (
    <Grid container className='bg-white'>
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
    </Grid>
  )
}

DetailsShop.proptypes = {
  shoppingDay: PropTypes.string.isRequired,
  delivery: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  addressFullName: PropTypes.string.isRequired,
  addressLine1: PropTypes.string.isRequired,
  addressLine2: PropTypes.string.isRequired,
  addressCityOrRegionPC: PropTypes.string.isRequired
}
