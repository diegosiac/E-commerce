import { useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Grid, List, Typography } from '@mui/material'
import { formaterValue, setCheckout } from '../../helpers'
import { Paypal } from '../../icons/Paypal'
import { ListItemsShop } from './ListItemsShop'

export const Review = ({ handleBack, addressData, basket }) => {
  const [loading, setLoading] = useState(false)

  const { firstName, lastName, phoneNumber, address1, countryRegion, zip, locality, sublocality, state } = addressData

  const totalValue = basket.reduce((accum, item) => (accum + item.value) * item.quantity, 0)
  const completeAddress = `${address1}, ${sublocality}, ${locality}, ${state}, ${zip}, ${countryRegion}`

  const handleCheckout = async () => {
    if (loading) return
    setLoading(true)
    const { link } = await setCheckout({ address: addressData })

    window.location.assign(link.href)
  }

  return (
    <>
      <List className='p-0'>
        {basket.map((product) => (
          <ListItemsShop
            key={product.id}
            primary={product.name}
            secondary={`Cantidad: ${product.quantity}`}
            value={`${formaterValue(product.value)}`}
          />
        ))}

        <ListItemsShop
          primary='Envio'
          value='Gratis'
        />
        <ListItemsShop
          primary='Total'
          value={`${formaterValue(totalValue)} MXN`}
          bold
        />
      </List>

      <Grid container>
        <Grid item xs={8}>
          <Typography variant='subtitle1' className='my-2'>
            Datos de Envío
          </Typography>
          <Typography component='span' className='block'>{`${firstName} ${lastName}`}</Typography>
          <Typography component='span' className='block'>{completeAddress}</Typography>
          <Typography component='span' className='block'>{phoneNumber}</Typography>
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
          onClick={handleCheckout}
          disabled={loading}
        >
          Pagar Con Paypal
        </Button>
      </Box>
    </>
  )
}

Review.propTypes = {
  handleBack: PropTypes.func.isRequired,
  addressData: PropTypes.object.isRequired,
  basket: PropTypes.array.isRequired
}
