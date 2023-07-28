import { Navigate, Route, Routes } from 'react-router-dom'
import { Grid } from '@mui/material'
import { NavBar } from '../components'
import { LoginPage, RegisterPage } from '../pages'

export const AuthRoutes = () => {
  return (
    <Grid
      container
      className='flex-col justify-between items-center'
    >
      <NavBar />

      <Routes>
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />

        <Route path='/*' element={<Navigate to='/auth/login' />} />
      </Routes>
    </Grid>
  )
}
