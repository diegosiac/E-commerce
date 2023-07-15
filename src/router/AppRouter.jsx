import { Route, Routes } from 'react-router-dom'
import { useCheckAuth } from '../hooks'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { Footer } from '../components'
import { PublicRouter } from './'

export const AppRouter = () => {
  const { status } = useCheckAuth()

  return (
    <>
      {
        status !== 'checking'
          ? (
            <>
              <Routes>
                {
                  status === 'not-authenticated' &&
                    <Route path='auth/*' element={<AuthRoutes />} />
                }

                <Route path='/*' element={<PublicRouter />} />
              </Routes>
              <Footer />
            </>
            )
          : <></>
      }
    </>
  )
}
