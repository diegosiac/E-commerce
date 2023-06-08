import PropTypes from 'prop-types'
import { Grid, Typography } from '@mui/material'

export const PurchasesLayout = ({ children, title }) => {
  return (
    <Grid
      container
      className='justify-center'
    >
      <Grid
        className='w-11/12 my-8'
      >
        <Typography
          variant='subtitle1'
          component='h1'
        >
          {title}
        </Typography>

        {children}
      </Grid>
    </Grid>
  )
}

PurchasesLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
}
