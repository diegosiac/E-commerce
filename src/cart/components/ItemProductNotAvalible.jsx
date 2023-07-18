import { Alert, Box, Button, Container, Grid, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import { STATUS } from '../../store/cart'

export const ItemProductNotAvalible = ({ id, thumbnail, name, index, deleteProductItem, status }) => {
  const handleDeleteItem = () => {
    deleteProductItem({ index, id })
  }

  const isStatusChecking = status === STATUS.CHECKING
  return (
    <Container
      component='section'
      className='flex flex-wrap py-3 border-b-[1px] border-[#dadada]'
    >
      <Grid
        component='article'
        className='flex w-full'
      >
        <img src={thumbnail} alt={name} className='h-20 aspect-[5/5] bg-gray-100' />
        <Grid item className='flex justify-between flex-col items-start ml-4'>
          <Typography
            variant='h4'
            component='span'
            className='whitespace-nowrap'
          >
            {name}
          </Typography>
          <Button
            type='submit'
            color='success'
            className='p-0 z-50'
            onClick={handleDeleteItem}
            disabled={isStatusChecking}
            title='Eliminar'
            aria-label='Eliminar'
          >
            Eliminar
          </Button>
        </Grid>
      </Grid>

      <Box className='flex justify-end w-full'>
        <Alert severity='warning'>Este producto ya no esta disponible</Alert>
      </Box>
    </Container>
  )
}

ItemProductNotAvalible.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string,
  thumbnail: PropTypes.string.isRequired,
  deleteProductItem: PropTypes.func.isRequired
}
