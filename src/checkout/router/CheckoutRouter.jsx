import { Navigate, Route, Routes } from 'react-router-dom'
import { CheckoutPage, ExecutePaymentPage, CancelPaymentPage } from '../pages'

export const CheckoutRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<CheckoutPage />} />
      <Route path='execute_payment' element={<ExecutePaymentPage />} />
      <Route path='cancel_payment' element={<CancelPaymentPage />} />

      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}
