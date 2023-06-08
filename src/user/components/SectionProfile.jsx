import Proptypes from 'prop-types'
import { Grid, Typography } from '@mui/material'

export const SectionProfile = ({ children, title }) => {
  return (
    <Grid
      container
      className='flex-col mb-4'
    >
      <Typography
        variant='subtitle1'
        component='span'
      >
        {title}
      </Typography>

      <Grid bgcolor='white' className='px-5 mt-5'>

        {children}

      </Grid>
    </Grid>
  )
}

SectionProfile.proptypes = {
  children: Proptypes.node.isRequired,
  title: Proptypes.string.isRequired
}
