import { Box, Grid, Typography } from '@mui/material'
import PropTypes from 'prop-types'

export const ItemProduct = ({ title, thumbnail, value, amount }) => {
  return (
    <Grid
      container
      className='border-b border-solid pb-2'
    >
      <img src={thumbnail} alt={title} />
      <Box className='ml-5 pt-1'>
        <Typography className='text-base block' component='span'>{title}</Typography>
        <Typography className='my-2 text-sm block' component='span'>Cantidad: {amount}</Typography>
        <Typography className='text-sm block' component='span'>${value}</Typography>
      </Box>
    </Grid>
  )
}

ItemProduct.proptypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired
}
