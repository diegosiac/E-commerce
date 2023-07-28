import { Link as RouterLink } from 'react-router-dom'
import { Grid, Link } from '@mui/material'
import second from '../../assets/imgs/logos/logoP.webp'

export const NavBar = () => {
  return (
    <Grid
      container
      component='nav'
      className='w-6/6 h-20 items-center'
      bgcolor='primary.main'
    >
      <Link component={RouterLink} to='/' className='ml-4'>
        <img src={second} alt='Geek Mobile Repair' className='h-10' />
      </Link>
    </Grid>
  )
}
