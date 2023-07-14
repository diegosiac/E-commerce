import { Navigate, Route, Routes } from 'react-router-dom'
import { ComponentsPage, DevicesPage, RepairsPage, SearchPage } from '../pages'

export const CategoriesRouter = () => {
  return (
    <Routes>
      <Route path='repairs' element={<RepairsPage />} />
      <Route path='components' element={<ComponentsPage />} />
      <Route path='devices' element={<DevicesPage />} />
      <Route path='search' element={<SearchPage />} />

      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}
