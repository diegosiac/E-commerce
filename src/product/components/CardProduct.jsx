import { Link as RouterLink } from 'react-router-dom'
import Proptypes from 'prop-types'
import { Card, CardActionArea, CardContent, CardMedia, Divider, Typography } from '@mui/material'
import { formaterValue } from '../../helpers'

export const CardProduct = ({ name, thumbnail, value, id }) => {
  const textLink = name.trim().replace(/ /g, '-').replace(/\//g, '')
  return (
    <Card className='w-[270px] bg-white' data-testid='cardProduct'>
      <CardActionArea
        LinkComponent={RouterLink}
        to={`/product/${textLink}?id=${id}`}
        name={`Ir a ${name}`}
      >
        <CardMedia
          component='img'
          className='h-[200px] object-contain'
          image={thumbnail}
          alt={name}
        />
        <Divider />
        <CardContent>
          <Typography variant='h4' component='span'>
            {formaterValue(value)}
          </Typography>
          <Typography
            component='span'
            className='my-1 block text-[#00a650]'
          >
            Envío gratis
          </Typography>
          <Typography component='h3'>
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

CardProduct.proptypes = {
  name: Proptypes.string.isRequired,
  thumbnail: Proptypes.string.isRequired,
  value: Proptypes.number.isRequired,
  id: Proptypes.number.isRequired
}
