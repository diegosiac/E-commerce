import { Box, List } from '@mui/material'
import { ItemsLinksDesk } from './ItemsLinksDesk'

export const Categories = () => {
  return (
    <Box className='hidden md:block'>
      <List className='flex justify-between items-end'>

        <ItemsLinksDesk
          title='Inicio'
          to='/'
        />
        <ItemsLinksDesk
          title='Reparaciónes'
          to='/categories/repairs'
        />
        <ItemsLinksDesk
          title='Componentes'
          to='/categories/components'
        />
        <ItemsLinksDesk
          title='Dispositivos'
          to='/categories/devices'
        />

      </List>
    </Box>
  )
}
