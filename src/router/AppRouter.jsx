import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { Footer } from '../components'
import { PublicRouter } from './PublicRouter'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='auth/*' element={<AuthRoutes />} />

        <Route path='/*' element={<PublicRouter />} />
      </Routes>
      <Footer />
    </>
  )
}
