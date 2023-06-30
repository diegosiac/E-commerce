import { useMemo } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { object, string } from 'yup'
import { Alert, Grid, Link, TextField, Typography } from '@mui/material'
import { startRegister } from '../../store/auth'
import { AuthLayout } from '../layout/AuthLayout'
import { InputPassword, InputLoding } from '../components'
import { useClearMessage } from '../../hooks'

const initialValues = {
  name: '',
  email: '',
  password: ''
}

const validationSchema = object({
  name: string()
    .required('El nombre es requerido')
    .matches(/^[\p{L}´¨()\-\s]+$/u, 'El nombre no es válido')
    .min(1, 'El nombre tiene que tener al menos un carácter')
    .max(50, 'El nombre no puede superar los 50 carácteres'),
  email: string()
    .required('El correo es requerido')
    .email('El correo no es válido'),
  password: string()
    .required('La contraseña es requerida')
    .min(6, 'Debe tener al menos 6 caracteres')
})

export const RegisterPage = () => {
  const { status, errorMessage } = useSelector(state => state.auth)
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status])

  const dispatch = useDispatch()

  const createUser = (userData) => {
    dispatch(startRegister(userData))
  }

  useClearMessage()

  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: createUser
  })

  return (
    <AuthLayout title='Crear cuenta'>
      <form onSubmit={handleSubmit}>
        <Grid container>

          <Grid container className='mt-4'>
            <TextField
              name='name'
              type='text'
              label='Nombre completo'
              placeholder='Nombre completo'
              aria-label='Ingresa tu nombre'
              value={values.name}
              onChange={handleChange}
              autoComplete='given-name'
              color='success'
              error={!!errors.name}
              helperText={errors.name}
              fullWidth
            />
          </Grid>

          <Grid container className='mt-4'>
            <TextField
              name='email'
              label='Correo'
              type='email'
              aria-label='Ingresa tu correo'
              placeholder='correo@google.com'
              fullWidth
              value={values.email}
              onChange={handleChange}
              autoComplete='email'
              color='success'
              error={!!errors.email}
              helperText={errors.email}
            />
          </Grid>

          <InputPassword onHandleChange={handleChange} value={values.password} error={errors.password} />

          <Grid container className='mb-4 mt-1'>

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
              <InputLoding loading={isCheckingAuthentication} text='Crear Cuenta' />
            </Grid>
          </Grid>

          <Grid container className='flex flex-row justify-end'>
            <Typography className='mr-2'>¿Ya tienes cuenta?</Typography>
            <Link
              component={RouterLink}
              color='inherit'
              to='/auth/login'
              aria-label='Ir a Iniciar tu Sesión'
            >
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
