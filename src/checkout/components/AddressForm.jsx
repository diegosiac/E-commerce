import PropTypes from 'prop-types'
import { Autocomplete, Box, Button, Grid, TextField } from '@mui/material'
import { InputAdress } from './'

const COUNTRIES = [
  { code: 'MX', label: 'Mexico' }
]

export const AddressForm = ({ handleNext }) => {
  return (
    <>
      <Grid container spacing={3}>
        <InputAdress
          id='firstName'
          name='firstName'
          label='Nombre(s)'
          autoComplete='given-name'
          xs={12}
          sm={6}
        />
        <InputAdress
          id='lastName'
          name='lastName'
          label='Apellido(s)'
          autoComplete='family-name'
          xs={12}
          sm={6}
        />
        <InputAdress
          id='address1'
          name='address1'
          label='Calle y número'
          placeholder='Calle, número ext e int'
          autoComplete='shipping address-line1'
          variant='standard'
          xs={12}
        />
        <InputAdress
          id='phoneNumber'
          name='phoneNumber'
          label='Número de teléfono'
          helperText='Puede ser utilizado durante la entrega'
          autoComplete='tel'
          xs={12}
          sm={6}
        />

        <Grid item xs={12} sm={6}>
          <Autocomplete
            id='country-select'
            options={COUNTRIES}
            disableClearable
            fullWidth
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
              <Box component='li' {...props}>
                {option.label}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                required
                label='País o región'
                variant='standard'
                aria-label='Elige tu País o región'
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'new-password'
                }}
              />
            )}
          />
        </Grid>

        <InputAdress
          id='zip'
          name='zip'
          label='Código postal'
          placeholder='Por ejemplo, 01000'
          autoComplete='shipping postal-code'
          xs={12}
          sm={6}
        />
        <InputAdress
          id='city'
          name='city'
          label='Ciudad'
          disabled
          autoComplete='shipping address-level2'
          xs={12}
          sm={6}
        />
        <InputAdress
          id='state'
          name='state'
          disabled
          label='Estado/Provincia/Región'
          xs={12}
          sm={6}
        />
        <InputAdress
          id='country'
          name='country'
          disabled
          label='Colonia'
          xs={12}
          sm={6}
        />
      </Grid>
      <Box className='flex justify-end mt-6'>
        <Button
          variant='contained'
          onClick={handleNext}
          color='success'
          className='bg-[#3483fa]'
          aria-label='Siguiente Paso'
        >
          Siguiente
        </Button>
      </Box>
    </>
  )
}

AddressForm.propTypes = {
  handleNext: PropTypes.func.isRequired
}
