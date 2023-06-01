import { useNavigate } from 'react-router-dom'
import { Grid, Badge, IconButton } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Search } from './components/Search'
import logo from '../assets/imgs/logos/logoP.png'

export const NavBar = () => {
  const navigate = useNavigate()

  const onChangePage = () => navigate('/cart', { replace: true })
  return (
    <Grid
      container
      component='nav'
      className='w-6/6 h-16 md:h-24 items-center px-5 justify-between'
      bgcolor='primary.main'
    >
      <Grid item>
        <img src={logo} alt='Geek Mobile Repair' className='h-10 ml-4 hidden' />

      </Grid>

      <Grid>
        <Search />
      </Grid>

      <Grid>
        <IconButton color='success' onClick={onChangePage}>
          <Badge badgeContent={4} color='success'>
            <ShoppingCartIcon sx={{ color: '#fff' }} />
          </Badge>
        </IconButton>
      </Grid>

    </Grid>
  )
}
