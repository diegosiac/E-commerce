import { Box, Grid, Typography } from '@mui/material'
import { useProductStore } from '../../hooks/useProductStore'
import { CardProduct, SkeletonProduct } from '../../product/components'

export const HomePage = () => {
  const { products } = useProductStore()

  return (
    <Grid
      container
      className='justify-center flex-col items-center'
    >
      <Box className='m-5 md:m-7 w-11/12 h-72'>
        <img
          src='../../assets/imgs/logos/presentationMobile.webp'
          alt='Geek Mobile Repair'
          srcSet='../../assets/imgs/logos/presentationMobile.webp 480w,
          ../../assets/imgs/logos/presentation.webp 1200w'
          sizes='(max-width: 767px) 480px, 1200px'
          className='w-full h-full object-cover'
        />
      </Box>

      <Grid
        container
        className='w-11/12 mb-5'
      >
        <Box className='flex mb-8'>
          <Box className='w-2 h-full bg-[#3483fa] mr-2' />
          <Typography variant='h3' component='h2'>Todos Nuestros Productos y Servicios</Typography>
        </Box>

        <Grid
          container
          className='justify-evenly gap-6'
        >
          {
            products
              ? products.map(({ id, ...props }) => (
                <CardProduct
                  key={id}
                  id={id}
                  {...props}
                />
              ))
              : (
                <>
                  <SkeletonProduct />
                  <SkeletonProduct />
                  <SkeletonProduct />
                  <SkeletonProduct />
                  <SkeletonProduct />
                  <SkeletonProduct />
                  <SkeletonProduct />
                </>
                )
          }
        </Grid>

      </Grid>

    </Grid>
  )
}
