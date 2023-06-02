import { useNavigate } from 'react-router-dom'
import { Grid, Badge, IconButton } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Search, MenuHam, Categories, UserIcon } from './components'
import logo from '../assets/imgs/logos/logoP.png'

export const NavBar = () => {
  const navigate = useNavigate()

  const userName = 'Diego'

  const onChangePage = () => navigate('/cart', { replace: true })

  return (
    <Grid
      container
      component='nav'
      className='w-6/6 h-16 md:h-24 items-center px-5 justify-between flex-nowrap'
      bgcolor='primary.main'
    >
      <Grid item>
        <img src={logo} alt='Geek Mobile Repair' className='h-10 ml-4 hidden md:block' />
        <MenuHam />
      </Grid>

      <Grid className='flex-grow max-w-[350px] mx-3 md:mt-3'>
        <Search />
        <Categories />
      </Grid>

      <Grid className='flex'>
        {
					false
					  ? <UserIcon userName={userName} to='/profile' />
					  : <UserIcon userName='Inicar Sesion' to='/auth' />
				}
        <IconButton color='success' onClick={onChangePage}>
          <Badge badgeContent={4} color='success'>
            <ShoppingCartIcon className='text-white' />
          </Badge>
        </IconButton>
      </Grid>

    </Grid>
  )
}
