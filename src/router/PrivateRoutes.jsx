import { Navigate, Route, Routes } from 'react-router-dom'
import { ProfilePage } from '../user/pages'
import { PurchasesRouter } from '../purchases/router'
import { CheckoutRouter } from '../checkout/router'
import { useAuthStore } from '../hooks'
import { CartPage } from '../cart/pages'

export const PrivateRoutes = () => {
  const { status } = useAuthStore()

  if (status === 'not-authenticated') return <Navigate to='/auth' replace />

  return (
    <Routes>
      <Route path='profile/*' element={<ProfilePage />} />

      <Route path='my_purchases/*' element={<PurchasesRouter />} />

      <Route path='cart/*' element={<CartPage />} />
      <Route path='checkout/*' element={<CheckoutRouter />} />
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}
