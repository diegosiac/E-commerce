import { Link as RouterLink } from 'react-router-dom'
import { Grid, Badge, IconButton, Link } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useAuthStore } from '../hooks'
import { Search, MenuHam, Categories, AcountUser } from './components'
import logo from '../assets/imgs/logos/logoP.png'

export const NavBar = () => {
  const { status, user } = useAuthStore()

  const countProducts = user.basket?.products.length || 0

  const isAuthenticated = status === 'authenticated'

  return (
    <Grid
      container
      component='nav'
      className='w-6/6 h-16 md:h-24 items-center px-5 justify-between flex-nowrap'
      bgcolor='primary.main'
    >
      <Grid item>
        <Link component={RouterLink} to='/' className='ml-4 hidden md:block'>
          <img src={logo} alt='Geek Mobile Repair' className='h-10' />
        </Link>
        <MenuHam />
      </Grid>

      <Grid className='flex-grow max-w-[350px] mx-3 md:mt-3'>
        <Search />
        <Categories />
      </Grid>

      <Grid className='flex'>
        <AcountUser />

        <IconButton color='success' LinkComponent={RouterLink} to={`${isAuthenticated ? '/cart' : '/auth'}`}>
          <Badge badgeContent={countProducts} color='success'>
            <ShoppingCartIcon className='text-white' />
          </Badge>
        </IconButton>
      </Grid>

    </Grid>
  )
}
