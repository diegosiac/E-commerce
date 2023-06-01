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
        className='ml-3'
      />

      <Divider className='h-7 m-[0.5px]' orientation='vertical' />

      <IconButton
        type='button'
        className='p-[10px]'
        aria-label='search'
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}
