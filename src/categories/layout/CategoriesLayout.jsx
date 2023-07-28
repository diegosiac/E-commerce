import { Box, Grid, Typography } from '@mui/material'
import Proptypes from 'prop-types'
import { CardContend } from '../components/CardContend'
import hardware from '../../assets/imgs/backgrounds/hardware.webp'

export const CategoriesLayout = ({
  children,
  title,
  disableGrid,
  urlSecondary,
  titlePrimary,
  titleSecondary,
  titleThird,
  titleFourth,
  descriptionPrimary,
  descriptionSecondary,
  descriptionThird,
  descriptionFourth
}) => {
  return (
    <Grid
      container
      className='justify-center flex-col items-center mb-16'
    >

      <Grid
        container
        className='w-11/12 mt-5 mb-14'
      >
        <Box className='flex mb-8'>
          <Box className='w-2 h-full bg-[#3483fa] mr-2' />
          <Typography variant='h3' component='h2'>{title}</Typography>
        </Box>

        <Grid
          container
          className='justify-evenly gap-6'
        >
          {children}
        </Grid>

      </Grid>

      {
        !disableGrid &&
          <Box
            className='grid grid-cols-2 gap-4 w-11/12 md:grid-cols-4'
          >

            <CardContend
              classImg='object-cover h-[200px]'
              urlImg={hardware}
              title={titlePrimary}
              description={descriptionPrimary}
              className='col-span-2 md:row-span-2'
            />

            <CardContend
              classImg='object-contain w-32'
              urlImg={urlSecondary}
              title={titleSecondary}
              description={descriptionSecondary}
              className='flex col-span-2'
            />

            <CardContend
              title={titleThird}
              description={descriptionThird}
            />

            <CardContend
              title={titleFourth}
              description={descriptionFourth}
            />

          </Box>
      }

    </Grid>
  )
}

CategoriesLayout.proptypes = {
  children: Proptypes.node.isRequired,
  title: Proptypes.string.isRequired,
  disableGrid: Proptypes.bool,
  urlSecondary: Proptypes.string,
  titlePrimary: Proptypes.string,
  titleSecondary: Proptypes.string,
  titleThird: Proptypes.string,
  titleFourth: Proptypes.string,
  descriptionPrimary: Proptypes.string,
  descriptionSecondary: Proptypes.string,
  descriptionThird: Proptypes.string,
  descriptionFourth: Proptypes.string
}

CategoriesLayout.defaultProps = {
  disableGrid: false
}
