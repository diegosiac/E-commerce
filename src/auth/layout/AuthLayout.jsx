import { Grid, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import { NavBar } from '../components'

export const AuthLayout = ({ children, title }) => {
  return (
    <Grid
      container
      className='flex-col justify-between items-center'
    >
      <NavBar />

      <Grid
        item
        component='main'
        bgcolor='grey.50'
        className='max-w-[90%] p-6 sm:w-[450px] rounded-lg my-12'
      >
        <Typography variant='h2' component='h1' className='mb-2'>{title}</Typography>

        {children}

      </Grid>
    </Grid>
  )
}

AuthLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
}

AuthLayout.defaultProps = {
  title: ''
}
