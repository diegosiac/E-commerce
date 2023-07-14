import { Navigate, Route, Routes } from 'react-router-dom'
import { ProductNotFount, ProductPage } from '../pages'

export const ProductRouter = () => {
  return (
    <Routes>
      <Route path='/:title' element={<ProductPage />} />
      <Route path='not-found' element={<ProductNotFount />} />

      <Route path='/*' element={<Navigate to='not-found' />} />
    </Routes>
  )
}
