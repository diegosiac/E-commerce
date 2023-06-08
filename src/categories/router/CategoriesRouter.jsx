import { Navigate, Route, Routes } from 'react-router-dom'
import { ComponentsPage, DevicesPage, RepairsPage } from '../pages'

export const CategoriesRouter = () => {
  return (
    <Routes>
      <Route path='repairs' element={<RepairsPage />} />
      <Route path='components' element={<ComponentsPage />} />
      <Route path='devices' element={<DevicesPage />} />

      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}
