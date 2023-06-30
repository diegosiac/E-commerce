import { Divider, IconButton, InputBase, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

export const Search = () => {
  return (
    <Paper
      component='form'
      className='flex items-center'
    >
      <InputBase
        placeholder='Busca reparaciones y mas..'
        className='ml-2 flex-grow'
        aria-label='Ingresa lo que quieras encontrar'
        inputProps={{
          'aria-label': 'Ingresa lo que quieras encontrar'
        }}
      />

      <Divider className='h-7' orientation='vertical' />

      <IconButton
        type='button'
        title='Buscar'
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}
