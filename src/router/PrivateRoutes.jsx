import { Navigate, Route, Routes } from 'react-router-dom'
import { ProfilePage } from '../user/pages'
import { PurchasesRouter } from '../purchases/router'
import { CheckoutRouter } from '../checkout/router'

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path='profile/*' element={<ProfilePage />} />

      <Route path='my_purchases/*' element={<PurchasesRouter />} />

      <Route path='checkout/*' element={<CheckoutRouter />} />

      <Route path='checkout/*' element={<CheckoutRouter />} />

      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}
