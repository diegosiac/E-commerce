import { Navigate, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { PrivateRoutes } from './PrivateRoutes'
import { CartPage } from '../cart/pages'
import { HomePage } from '../home/pages'
import { ProductPage } from '../product/pages'
import { NavBar } from '../navbar/NavBar'
import { CategoriesRouter } from '../categories/router'

export const PublicRouter = () => {
  const { status } = useSelector(state => state.auth)

  return (
    <>
      <NavBar />
      <main className='flex justify-center'>
        <Routes>
          {
            status === 'authenticated' &&
              <Route path='/*' element={<PrivateRoutes />} />
          }
          <Route path='/' element={<HomePage />} />
          <Route path='cart/*' element={<CartPage />} />
          <Route path='product/*' element={<ProductPage />} />

          <Route path='categories/*' element={<CategoriesRouter />} />

          <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
      </main>
    </>
  )
}
