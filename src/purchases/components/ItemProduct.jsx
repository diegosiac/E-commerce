import { Box, Grid, Typography } from '@mui/material'
import PropTypes from 'prop-types'

export const ItemProduct = ({ title, urlImg, value }) => {
  return (
    <Grid
      container
      className='border-b border-solid pb-2'
    >
      <img src={urlImg} alt={title} />
      <Box className='ml-5 pt-1'>
        <Typography className='text-base block' component='span'>{title}</Typography>
        {
          value &&
            <Typography className='mt-5 text-sm block' component='span'>${value}</Typography>
        }
      </Box>
    </Grid>
  )
}

ItemProduct.proptypes = {
  title: PropTypes.string.isRequired,
  urlImg: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}
