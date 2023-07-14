import { useState } from 'react'
import { Grid, Paper, Step, StepLabel, Stepper, Typography } from '@mui/material'
import { AddressForm, Review } from '../components'
import { useCartStore } from '../../hooks'

const steps = ['Dirección de Envío', 'Resumen de compra']

export const CheckoutPage = () => {
  const { basket } = useCartStore()
  const [activeStep, setActiveStep] = useState(0)
  const [addressData, setAddressData] = useState({
    firstName: '',
    lastName: '',
    address1: '',
    phoneNumber: '',
    countryRegion: '',
    zip: '',
    state: '',
    locality: '',
    sublocality: ''
  })

  const handleNext = () => setActiveStep(activeStep + 1)

  const handleBack = () => setActiveStep(activeStep - 1)

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <AddressForm handleNext={handleNext} setData={setAddressData} addressData={addressData} />
      case 1:
        return <Review handleBack={handleBack} addressData={addressData} basket={basket} />
      default:
        throw new Error('Unknown step')
    }
  }

  return (
    <Grid
      container
      className='justify-center'
    >
      <Paper variant='outlined' className='my-10 p-4 min-w-[370px] w-[75%]'>
        <Typography component='h1' variant='h2' className='text-center'>
          Proceso de pago
        </Typography>

        <Stepper activeStep={activeStep} className='py-6'>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {getStepContent(activeStep)}
      </Paper>
    </Grid>
  )
}
