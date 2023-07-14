import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import { object, string } from 'yup'
import { Alert, Autocomplete, Box, Button, CircularProgress, Grid, TextField } from '@mui/material'
import { COUNTRIES, getLocation } from '../../helpers'
import { InputAdress } from './'

const validationSchema = object({
  firstName: string()
    .matches(/^[\p{L}´¨()\-\s]+$/u, 'El nombre no es válido')
    .max(50, 'El nombre no puede superar los 50 carácteres')
    .required('El nombre es requerido'),
  lastName: string()
    .matches(/^[\p{L}´¨()\-\s]+$/u, 'Ingrese un apellido válido')
    .max(50, 'El nombre no puede superar los 50 carácteres')
    .required('El apellido es requerido'),
  address1: string()
    .min(6, 'Debe tener al menos 6 caracteres')
    .required('El campo es requerido'),
  phoneNumber: string()
    .matches(/^\+?\d{10,}$/, 'Ingrese un número de teléfono válido')
    .required('El teléfono es requerido'),
  countryRegion: string()
    .required('El campo es requerido'),
  zip: string()
    .matches(/^[0-9A-Za-z\s-]+$/, 'Código postal inválido')
    .required('El código postal es requerido'),
  state: string()
    .max(40, 'Debe tener al menos de 40 caracteres')
    .required('El campo es requerido'),
  locality: string()
    .max(40, 'Debe tener al menos de 40 caracteres')
    .required('El campo es requerido'),
  sublocality: string()
    .max(40, 'Debe tener al menos de 40 caracteres')
    .required('El campo es requerido')
})

export const AddressForm = ({ handleNext, setData, addressData }) => {
  const [zipValidation, setZipValidation] = useState(addressData.zip ? true : null)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  const { handleChange, errors, values, setFieldValue, touched, handleBlur, isValid } = useFormik({
    initialValues: addressData,
    validationSchema
  })

  useEffect(() => {
    setZipValidation(zipValidation)

    const timer = setTimeout(() => {
      if (!errors.zip && !errors.countryRegion && touched.countryRegion) {
        handleFormSubmit(values.countryRegion, values.zip)
      }
    }, 1500)

    return () => {
      clearTimeout(timer)
    }
  }, [values.zip, errors.zip])

  const handleFormSubmit = async (country, zip) => {
    setLoading(true)
    const dataZip = await getLocation({ country, zip })
    setZipValidation(dataZip || false)
    setLoading(false)
  }

  const validateForm = () => {
    if (!zipValidation || !isValid) {
      setErrorMessage('Complete todos los campos para continuar')

      setTimeout(() => setErrorMessage(null), 4000)
      return
    }

    setData(values)

    handleNext()
  }

  return (
    <>
      <Grid container spacing={3}>
        <InputAdress
          id='firstName'
          name='firstName'
          label='Nombre(s)'
          autoComplete='given-name'
          helperText={(touched.firstName || values.firstName) && errors.firstName}
          inputProps={{
            onChange: handleChange,
            value: values.firstName,
            onBlur: handleBlur
          }}
          xs={12}
          sm={6}
        />
        <InputAdress
          id='lastName'
          name='lastName'
          label='Apellido(s)'
          autoComplete='family-name'
          helperText={(touched.lastName || values.lastName) && errors.lastName}
          inputProps={{
            onChange: handleChange,
            value: values.lastName,
            onBlur: handleBlur
          }}
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
          helperText={(touched.address1 || values.address1) && errors.address1}
          inputProps={{
            onChange: handleChange,
            value: values.address1,
            onBlur: handleBlur
          }}
          xs={12}
        />
        <InputAdress
          id='phoneNumber'
          name='phoneNumber'
          label='Número de teléfono'
          autoComplete='tel'
          helperText={touched.phoneNumber || values.phoneNumber ? errors.phoneNumber : 'Puede ser utilizado durante la entrega'}
          inputProps={{
            onChange: handleChange,
            value: values.phoneNumber,
            onBlur: handleBlur
          }}
          xs={12}
          sm={6}
        />

        <Grid item xs={12} sm={6}>
          <Autocomplete
            noOptionsText='No disponible'
            options={COUNTRIES}
            value={values.countryRegion ? { label: values.countryRegion } : null}
            onBlur={handleBlur}
            disableClearable
            fullWidth
            onChange={(e, newValue) => {
              setFieldValue('countryRegion', newValue.label)
            }}
            getOptionLabel={(option) => option.label}
            isOptionEqualToValue={(option, value) => option.label === value.label}
            renderOption={(props, option) => (
              <Box component='li' {...props}>
                {option.label}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                required
                name='countryRegion'
                label='País o región'
                helperText={touched.countryRegion && !values.countryRegion ? errors.countryRegion : ''}
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
          id='state'
          name='state'
          label='Estado/Provincia/Región'
          autoComplete='address-level1'
          helperText={(touched.state || values.state) && errors.state}
          inputProps={{
            onChange: handleChange,
            value: values.state,
            onBlur: handleBlur
          }}
          xs={12}
          sm={6}
        />
        <InputAdress
          id='locality'
          name='locality'
          label='Ciudad'
          autoComplete='address-level2'
          helperText={(touched.locality || values.locality) && errors.locality}
          inputProps={{
            onChange: handleChange,
            value: values.locality,
            onBlur: handleBlur
          }}
          xs={12}
          sm={6}
        />
        <InputAdress
          id='sublocality'
          name='sublocality'
          label='Colonia'
          helperText={(touched.sublocality || values.sublocality) && errors.sublocality}
          inputProps={{
            onChange: handleChange,
            value: values.sublocality,
            onBlur: handleBlur
          }}
          xs={12}
          sm={6}
        />
        <InputAdress
          id='zip'
          name='zip'
          label='Código postal'
          placeholder='Por ejemplo, 01000'
          autoComplete='shipping postal-code'
          helperText={
            touched.zip &&
            (errors.zip || (zipValidation === false ? 'Código postal inválido' : ''))
          }
          disabled={!((!errors.countryRegion) || values.countryRegion?.label)}
          inputProps={{
            onChange: handleChange,
            value: values.zip,
            onBlur: handleBlur,
            error: touched.zip && (Boolean(errors.zip) || (zipValidation === false)),
            InputProps: {
              endAdornment: loading ? <CircularProgress style={{ width: 20, height: 20 }} /> : null
            }
          }}
          xs={12}
          sm={6}
        />
      </Grid>
      <Box className='flex flex-col items-end mt-6'>
        <Button
          variant='contained'
          onClick={validateForm}
          color='success'
          className='bg-[#3483fa] w-48'
          aria-label='Siguiente Paso'
        >
          Siguiente
        </Button>
        {
          errorMessage &&
            <Alert severity='error' className='mt-5'>{errorMessage}</Alert>
        }
      </Box>
    </>
  )
}

AddressForm.propTypes = {
  handleNext: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
  addressData: PropTypes.object.isRequired
}
