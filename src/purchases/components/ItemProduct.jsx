import { Box, Grid, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import { formaterValue } from '../../helpers'

export const ItemProduct = ({ name, thumbnail, value, amount }) => {
  return (
    <Grid
      container
      className='border-b border-solid pb-2'
      data-testid='ItemProduct'
    >
      <img src={thumbnail} alt={name} className='w-20 aspect-w-16 aspect-h-9' />
      <Box className='ml-5 pt-1'>
        <Typography className='text-base block' component='span'>{name}</Typography>
        <Typography className='my-2 text-sm block' component='span'>Cantidad: {amount}</Typography>
        <Typography className='text-sm block' component='span'>{formaterValue(value)}</Typography>
      </Box>
    </Grid>
  )
}

ItemProduct.proptypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired
}
