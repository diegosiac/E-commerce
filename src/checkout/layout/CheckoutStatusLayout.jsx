import PropTypes from 'prop-types'
import { Box, Container, Grid, Typography } from '@mui/material'

export const CheckoutStatusLayout = ({ children, title, boxColor }) => {
  return (
    <Grid
      container
      className='justify-center w-10/12 pt-10 pb-20'
    >
      <Container className='flex w-full p-0'>
        <Box className={`w-[10px] h-full bg-[${boxColor || '#fff'}] mr-3`} />
        <Typography
          variant='h2'
          component='h2'
        >
          {title}
        </Typography>
      </Container>
      <Grid container className='mt-8'>
        {children}
      </Grid>

    </Grid>
  )
}

CheckoutStatusLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  boxColor: PropTypes.string
}
