import { useState } from 'react'
import { Box, IconButton, Drawer, Divider, List } from '@mui/material'
import { Menu, Close, BuildCircleOutlined, SelectAllOutlined, Devices, HomeOutlined } from '@mui/icons-material'
import { useAuthStore } from '../../hooks'
import { CardProfile, LoginSection, ItemsLinks } from './'

export const MenuHam = () => {
  const { user, status } = useAuthStore()
  const [open, setState] = useState(false)

  const toggleDrawer = () => () => setState(!open)

  return (
    <div className='md:hidden'>
      <IconButton
        className='text-white p-0 z-20'
        onClick={toggleDrawer()}
        aria-label='Menú de usuario'
        aria-expanded={open}
      >
        {
          open
            ? <Close className='text-[#000]' fontSize='large' />
            : <Menu fontSize='large' />
        }
      </IconButton>

      <Drawer
        anchor='left'
        open={open}
        onClose={toggleDrawer()}
        PaperProps={{ className: 'w-full' }}
        className='z-10'
      >
        <Box
          className='pt-14 px-3 h-full'
          bgcolor='white'
          role='presentation'
        >

          <Divider className='mb-2' />

          <Box
            className='mb-2'
            onClick={toggleDrawer()}
          >
            <List>

              <ItemsLinks
                title='Inicio'
                icon={<HomeOutlined />}
                to='/'
              />
              <ItemsLinks
                title='Reparaciónes'
                icon={<BuildCircleOutlined />}
                to='/categories/repairs'
              />
              <ItemsLinks
                title='Componentes'
                icon={<SelectAllOutlined />}
                to='/categories/components'
              />
              <ItemsLinks
                title='Dispositivos'
                icon={<Devices />}
                to='/categories/devices'
              />

            </List>
          </Box>

          {
            status === 'authenticated'
              ? <CardProfile toggleDrawer={toggleDrawer} nameUser={user.name} />
              : <LoginSection toggleDrawer={toggleDrawer} />
          }

        </Box>
      </Drawer>
    </div>
  )
}
