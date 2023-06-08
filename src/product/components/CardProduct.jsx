import { Link as RouterLink } from 'react-router-dom'
import Proptypes from 'prop-types'
import { Card, CardActionArea, CardContent, CardMedia, Divider, Typography } from '@mui/material'

export const CardProduct = ({ title, urlProduct, value, id }) => {
  return (
    <Card className='w-[270px] bg-white'>
      <CardActionArea
        LinkComponent={RouterLink}
        to={`/product/${title}?id=${id}`}
      >
        <CardMedia
          component='img'
          className='h-[200px] object-contain'
          image={urlProduct}
          alt={title}
        />
        <Divider />
        <CardContent>
          <Typography variant='h5' component='span' className='text-xl'>
            $ {value}
          </Typography>
          <Typography
            component='span'
            className='my-1 block text-[#00a650]'
          >
            Envío gratis
          </Typography>
          <Typography component='h3'>
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

CardProduct.proptypes = {
  title: Proptypes.string.isRequired,
  urlProduct: Proptypes.string.isRequired,
  value: Proptypes.number.isRequired,
  id: Proptypes.number.isRequired
}

CardProduct.defaultProps = {
  title: 'Dpofirs Placa Madre de Telefono Movil para G950U,Ecológico Celular Placa Base',
  urlProduct: '../../assets/imgs/placaBase.jpg',
  value: 148,
  id: 'f293h92'
}
