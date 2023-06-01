import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  const errorMessage = 'asdf'
  const isCheckingAuthentication = false
  const onSubmit = (e) => {
    e.preventDefault()
  }

  const onInputChange = () => {

  }
  return (
    <AuthLayout title='Crear cuenta'>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} className='mt-4'>
            <TextField
              name='displayName'
              type='text'
              label='Nombre completo'
              placeholder='Nombre completo'
              // value={displayName}
              onChange={onInputChange}
              color='success'
              inputProps={{
                autoComplete: 'given-name'
              }}
              // error={!!displayNameValid && formSubmitted}
              // helperText={displayNameValid}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} className='mt-4'>
            <TextField
              label='Correo'
              type='email'
              placeholder='correo@google.com'
              fullWidth
              name='email'
              // value={email}
              onChange={onInputChange}
              color='success'
              inputProps={{
                autoComplete: 'email'
              }}
              // error={!!emailValid && formSubmitted}
              // helperText={emailValid}
            />
          </Grid>

          <Grid item xs={12} className='mt-4'>
            <TextField
              label='Contraseña'
              type='password'
              placeholder='Debe tener al menos 6 caracteres"'
              fullWidth
              name='password'
              // value={password}
              onChange={onInputChange}
              color='success'
              inputProps={{
                autoComplete: 'new-password'
              }}
              // error={!!passwordValid && formSubmitted}
              // helperText={passwordValid}
            />
          </Grid>

          <Grid container className='mb-4 mt-1'>

            <Grid
              item
              xs={12}
              className={`${errorMessage ? '' : 'hidden'}`}
            >
              <Alert severity='error'>
                {errorMessage}
              </Alert>
            </Grid>

            <Grid item xs={12}>
              <Button
                disabled={isCheckingAuthentication}
                type='submit'
                variant='contained'
                color='success'
                className='bg-[#3483fa]'
                fullWidth
              >
                Crear cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container className='flex flex-row justify-end'>
            <Typography className='mr-2'>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login'>
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>

    </AuthLayout>
  )
}
