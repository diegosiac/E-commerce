import { Navigate, Route, Routes } from 'react-router-dom'
import { PurchasesPage, OrderDetailsPage } from '../pages'

export const PurchasesRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<PurchasesPage />} />
      <Route path='order-details' element={<OrderDetailsPage />} />

      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}
