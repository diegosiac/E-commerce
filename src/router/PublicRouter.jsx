import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { clearProducts, getProductsApi } from '../store/products/thunks'
import { PrivateRoutes } from './PrivateRoutes'
import { HomePage } from '../home/pages'
import { NavBar } from '../navbar/NavBar'
import { CategoriesRouter } from '../categories/router'
import { ProductRouter } from '../product/router'

export const PublicRouter = () => {
  const dispatch = useDispatch()

  dispatch(getProductsApi())

  useEffect(() => {
    return () => {
      dispatch(clearProducts())
    }
  }, [])

  return (
    <>
      <NavBar />
      <main className='flex justify-center'>
        <Routes>

          <Route path='/*' element={<PrivateRoutes />} />

          <Route path='/' element={<HomePage />} />
          <Route path='product/*' element={<ProductRouter />} />

          <Route path='categories/*' element={<CategoriesRouter />} />

          <Route path='/*' element={<Navigate to='/' />} />

        </Routes>
      </main>
    </>
  )
}
