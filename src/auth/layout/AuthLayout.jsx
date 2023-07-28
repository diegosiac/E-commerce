import { Grid, Typography } from '@mui/material'
import PropTypes from 'prop-types'

export const AuthLayout = ({ children, title }) => {
  return (
    <Grid
      item
      component='main'
      bgcolor='grey.50'
      className='max-w-[90%] p-6 sm:w-[450px] rounded-lg my-12'
    >
      <Typography variant='h2' component='h1' className='mb-2'>{title}</Typography>
      {children}
    </Grid>
  )
}

AuthLayout.defaultProps = {
  title: ''
}

AuthLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
}
