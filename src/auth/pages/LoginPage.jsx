import { useMemo } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { object, string } from 'yup'
import { Alert, Grid, Link, TextField, Typography } from '@mui/material'
import { startLogin } from '../../store/auth'
import { AuthLayout } from '../layout/AuthLayout'
import { InputLoding, InputPassword } from '../components'
import { useAuthStore, useClearMessage } from '../../hooks'

const initialValues = {
  email: '',
  password: ''
}

const validationSchema = object({
  email: string()
    .required('El correo es requerido')
    .email('El correo no es válido'),
  password: string()
    .required('La contraseña es requerida')
    .min(6, 'Debe tener al menos 6 caracteres')
})

export const LoginPage = () => {
  const { status, errorMessage } = useAuthStore()
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status])

  const dispatch = useDispatch()

  const createUser = (userData) => {
    dispatch(startLogin(userData))
  }

  useClearMessage()

  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: createUser
  })

  return (
    <AuthLayout title='Iniciar sesión'>
      <form aria-label='submit-form' onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12} className='mt-4'>
            <TextField
              name='email'
              type='email'
              label='Correo'
              placeholder='correo@google.com'
              value={values.email}
              onChange={handleChange}
              color='success'
              autoComplete='email'
              aria-label='Ingresa tu correo'
              fullWidth
            />
          </Grid>

          <InputPassword onHandleChange={handleChange} value={values.password} error={errors.password} />

          <Grid container className='my-4 mt-1'>
            <Grid
              item
              xs={12}
              className={`${errorMessage ? '' : 'hidden'} mb-2`}
            >
              <Alert severity='error'>
                {errorMessage}
              </Alert>
            </Grid>

            <Grid item xs={12}>
              <InputLoding loading={isCheckingAuthentication} text='Iniciar Sesión' type='submit' />
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography className='mr-2'>¿Eres nuevo en GEEK MOBILE?</Typography>
            <Link
              component={RouterLink}
              color='inherit'
              to='/auth/register'
              title='Ir a Registrarse'
              aria-label='Ir a Registrarse'
            >
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>

    </AuthLayout>
  )
}
