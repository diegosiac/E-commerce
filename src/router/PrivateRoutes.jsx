import { Navigate, Route, Routes } from 'react-router-dom'
import { ProfilePage } from '../user/pages'
import { PurchasesRouter } from '../purchases/router'
import { CheckoutRouter } from '../checkout/router'
import { useCartStore } from '../hooks'

export const PrivateRoutes = () => {
  const { basket } = useCartStore()

  return (
    <Routes>
      <Route path='profile/*' element={<ProfilePage />} />

      <Route path='my_purchases/*' element={<PurchasesRouter />} />
      {
        basket.length !== 0 &&
          <Route path='checkout/*' element={<CheckoutRouter />} />
      }
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}
