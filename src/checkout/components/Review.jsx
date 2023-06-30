import PropTypes from 'prop-types'
import { Box, Button, Grid, List, Typography } from '@mui/material'
import { Paypal } from '../../icons/Paypal'
import { ListItemsShop } from './ListItemsShop'

const products = [
  {
    name: 'Product 1',
    amount: 2,
    price: '$9.99'
  },
  {
    name: 'Product 2',
    amount: 1,
    price: '$3.45'
  },
  {
    name: 'Product 3',
    amount: 4,
    price: '$6.51'
  },
  {
    name: 'Product 4',
    amount: 5,
    price: '$14.11'
  }
]

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA']

const userName = 'Diego Cruz'

export const Review = ({ handleBack }) => {
  return (
    <>
      <List className='p-0'>
        {products.map((product) => (
          <ListItemsShop
            key={product.name}
            primary={product.name}
            secondary={`Cantidad: ${product.amount}`}
            value={product.price}
          />
        ))}

        <ListItemsShop
          primary='Envio'
          value='Gratis'
        />
        <ListItemsShop
          primary='Total'
          value='$34.06'
          bold
        />

      </List>

      <Grid container>
        <Grid item xs={8}>
          <Typography variant='subtitle1' className='my-2'>
            Datos de Envío
          </Typography>
          <Typography component='span' className='block'>{userName}</Typography>
          <Typography component='span' className='block'>{addresses.join(', ')}</Typography>
        </Grid>
      </Grid>

      <Box className='flex justify-end gap-4 pt-8'>
        <Button
          variant='contained'
          onClick={handleBack}
          color='success'
          className='bg-[#3483fa]'
          aria-label='Volver Atras'
        >
          Atras
        </Button>
        <Button
          variant='contained'
          className='bg-[#f2ba36] text-black'
          color='warning'
          startIcon={<Paypal />}
          aria-label='Pagar Con Paypal'
        >
          Pagar Con Paypal
        </Button>
      </Box>
    </>
  )
}

Review.propTypes = {
  handleBack: PropTypes.func.isRequired
}
