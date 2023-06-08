import Proptypes from 'prop-types'
import { Divider, Grid, Typography } from '@mui/material'

export const SectionItems = ({ title, desc }) => {
  return (
    <>
      <Grid className='flex py-4'>
        <Typography component='span' className='w-20'>{title}:</Typography>
        <Typography component='span'>{desc}</Typography>

      </Grid>
      <Divider orientation='horizontal' flexItem />
    </>
  )
}

SectionItems.proptypes = {
  title: Proptypes.string.isRequired,
  desc: Proptypes.string.isRequired
}
