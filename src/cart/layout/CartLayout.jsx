import { Container, Grid, Typography } from '@mui/material'
import PropTypes from 'prop-types'

export const CartLayout = ({ children, title, ...props }) => {
  return (
    <Grid
      container
      bgcolor='white'
      sx={{ borderRadius: 2 }}
      {...props}
    >

      <Container className='p-0 border-b-[1px] border-[#dadada]'>
        <Typography
          variant='h4'
          component='span'
          className='block border-b-[1px] border-black w-max py-3 px-10 text-center'
        >
          {title}
        </Typography>
      </Container>

      {children}

    </Grid>
  )
}

CartLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  props: PropTypes.any
}
