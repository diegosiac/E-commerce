import { Box, List } from '@mui/material'
import { ItemsLinksDesk } from './ItemsLinksDesk'

export const Categories = () => {
  return (
    <Box className='hidden md:block'>
      <List className='flex justify-between items-end'>

        <ItemsLinksDesk title='Inicio' to='/home' />
        <ItemsLinksDesk title='Reparaciónes' to='/categorys/repairs' />
        <ItemsLinksDesk title='Componentes' to='/categorys/components' />
        <ItemsLinksDesk title='Dispositivos' to='/categorys/devices' />

      </List>
    </Box>
  )
}
