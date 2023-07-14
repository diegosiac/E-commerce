import { Box, Skeleton } from '@mui/material'

export const SkeletonProduct = () => {
  return (
    <Box className='w-[270px] h-[320px] bg-white p-5'>
      <Skeleton variant='rectangular' className='h-[150px]' />
      <Skeleton variant='rectangular' className='w-[70px] h-[25px] my-2' />
      <Skeleton variant='rectangular' className='w-[100px] mb-2' />
      <Skeleton variant='rounded' className='mb-1' />
      <Skeleton variant='rounded' className='my-1' />
      <Skeleton variant='rounded' className='my-1' />
    </Box>
  )
}
