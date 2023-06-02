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
      />

      <Divider className='h-7' orientation='vertical' />

      <IconButton
        type='button'
        className=''
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}
