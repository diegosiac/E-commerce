import { Navigate, Route, Routes } from 'react-router-dom'
import { CartPage } from '../cart/pages'
import { NavBar } from '../navbar/NavBar'
import { HomePage } from '../home/pages'
import { ProductPage } from '../product/pages'
import { ProfilePage } from '../user/pages'
import { CategoriesRouter } from '../categories/router'
import { PurchasesRouter } from '../purchases/router'

export const PublicRouter = () => {
  const login = true
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          {
            login &&
              <Route path='profile/*' element={<ProfilePage />} />
          }
          {
            login &&
              <Route path='my_purchases/*' element={<PurchasesRouter />} />
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
