import { Navigate, Route, Routes, Link as LinkRouter, useLocation } from 'react-router-dom'
import { Breadcrumbs, Link, Typography } from '@mui/material'
import { PurchasesPage, OrderDetailsPage } from '../pages'

export const PurchasesRouter = () => {
  const { pathname } = useLocation()

  const isLocationDetails = pathname.includes('order-details')
  const link = pathname === '/my_purchases'
  return (
    <div className='flex flex-col w-full items-center'>
      <Breadcrumbs className='pt-5 w-11/12 text-[#007185]'>
        <Link
          className='text-inherit no-underline hover:underline hover:text-[#C7511F]'
          component={LinkRouter}
          title='Ir al Perfil'
          aria-label='Ir al Perfil'
          to='/profile'
        >
          Mi cuenta
        </Link>
        <Link
          className={`${link ? 'text-[#C7511F]' : 'text-inherit hover:underline hover:text-[#C7511F]'} no-underline `}
          component={link ? 'span' : LinkRouter}
          title='Ir a Mis compras'
          aria-label='Ir a Mis compras'
          to='/my_purchases'
        >
          Mis Compras
        </Link>
        {
          isLocationDetails &&
            <Typography className='text-[#C7511F]' component='span'>Detalles del pedido</Typography>
        }
      </Breadcrumbs>

      <Routes>
        <Route path='/' element={<PurchasesPage />} />
        <Route path='order-details' element={<OrderDetailsPage />} />

        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  )
}
