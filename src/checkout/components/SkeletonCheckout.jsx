import { Grid, Skeleton } from '@mui/material'

export const SkeletonCheckout = () => {
  return (
    <Grid className='w-10/12 mt-8 mb-16' data-testid='SkeletonCheckout'>

      <Skeleton variant='rectangular' className='h-10 w-60 mb-8' />

      <Skeleton variant='rectangular' className='h-7 w-44 mb-3' />
      <Skeleton variant='rectangular' className='h-60 mb-8 md:h-40' />

      <Skeleton variant='rectangular' className='h-7 w-44 mb-3' />
      <Skeleton variant='rectangular' className='h-28' />

    </Grid>
  )
}
