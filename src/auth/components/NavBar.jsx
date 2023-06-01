import { Grid } from '@mui/material'
import second from '../../assets/imgs/logos/logoP.png'

export const NavBar = () => {
  return (
    <Grid
      container
      component='nav'
      className='w-6/6 h-16 items-center'
      bgcolor='primary.main'
    >
      <img src={second} alt='Geek Mobile Repair' className='h-10 ml-4' />
    </Grid>
  )
}
