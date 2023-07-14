import { Grid, Typography } from '@mui/material'
import { SadFace } from '../../icons'

export const ProductNotFount = () => {
  return (
    <Grid container className='justify-center items-center bg-white w-10/12 rounded-md h-96 my-10 flex-col text-center text-gray-400'>
      <SadFace className='w-28 h-28' />
      <Typography variant='h1' component='h2' className='text-inherit mt-5'>404</Typography>
      <Typography variant='h3' component='h2' className='text-inherit my-2'>Producto no encontrado</Typography>
      <Typography variant='h6' component='h2' className='text-inherit'>El producto no existe o ya no hay disponibilidad</Typography>
    </Grid>
  )
}
