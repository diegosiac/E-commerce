import { Navigate, Route, Routes } from 'react-router-dom'
import { useCartStore } from '../../hooks'
import { CheckoutPage, ExecutePaymentPage, CancelPaymentPage } from '../pages'

export const CheckoutRouter = () => {
  const { basket } = useCartStore()
  return (
    <Routes>
      {
        basket.length !== 0 &&
          <Route path='/' element={<CheckoutPage />} />
      }
      <Route path='execute_payment' element={<ExecutePaymentPage />} />
      <Route path='cancel_payment' element={<CancelPaymentPage />} />

      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}
