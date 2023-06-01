import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'

export const LoginPage = () => {
  const errorMessage = 'asdf'
  const isAuthenticating = false

  const onInputChange = () => {

  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <AuthLayout title='Iniciar sesión'>
      <form aria-label='submit-form' onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} className='mt-4'>
            <TextField
              name='email'
              type='email'
              label='Correo'
              placeholder='correo@google.com'
              // value='asdfasd'
              onChange={onInputChange}
              color='success'
              inputProps={{
                autoComplete: 'email'
              }}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} className='mt-4'>
            <TextField
              name='password'
              type='password'
              label='Contraseña'
              placeholder='Contraseña'
              // value='asdfasd'
              onChange={onInputChange}
              color='success'
              inputProps={{
                autoComplete: 'current-password'
              }}
              fullWidth
            />
          </Grid>

          <Grid
            container
            className={`mt-2 ${errorMessage ? '' : 'hidden'}`}
          >
            <Grid
              item
              xs={12}
            >
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid>
          </Grid>

          <Grid container className='my-4'>
            <Grid item xs={12} className='pt-0'>
              <Button
                disabled={isAuthenticating}
                type='submit'
                variant='contained'
                color='success'
                className='bg-[#3483fa]'
                fullWidth
              >
                Login
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography className='mr-2'>¿Eres nuevo en Hooney-Creams?</Typography>
            <Link component={RouterLink} color='inherit' to='/auth/register'>
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>

    </AuthLayout>
  )
}
