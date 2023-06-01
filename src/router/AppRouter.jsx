import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { Footer } from '../components'
import { CartPage } from '../cart/pages'
import { NavBar } from '../navbar/NavBar'

export const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='auth/*' element={<AuthRoutes />} />
        <Route path='cart/*' element={<CartPage />} />
        <Route path='/*' element={<Navigate to='/auth/login' />} />
      </Routes>

      <Footer />
    </>

  )
}
