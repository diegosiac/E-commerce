import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { Grid, Typography } from '@mui/material'
import { useQuery } from '../../hooks'
import { getProductSearch } from '../../helpers'
import { setQuery } from '../../store/products/thunks'
import { CardProduct } from '../../product/components'
import { CategoriesLayout } from '../layout/CategoriesLayout'

export const SearchPage = () => {
  const dispatch = useDispatch()
  const queryRouter = useQuery()
  const [products, setProducts] = useState([])
  const queryRef = queryRouter.get('query')

  useEffect(() => {
    if (queryRef) {
      dispatch(setQuery(queryRef))
      setResultProducts(queryRef)
    }
  }, [queryRef])

  if (!queryRef) return <Navigate to='/' />

  const setResultProducts = async (query) => {
    const results = await getProductSearch(query)

    setProducts(results)
  }

  return (
    <CategoriesLayout
      title={`Resultados para "${queryRef}"`}
      disableGrid
    >
      {
        products.length !== 0
          ? products.map(({ id, ...props }) => (
            <CardProduct
              key={id}
              id={id}
              {...props}
            />
          ))
          : <Grid container className='bg-white justify-center items-center min-h-[400px] rounded-xl'>
            <Typography variant='h4' component='h2'>No se encontraron resultados</Typography>
          </Grid>
      }
    </CategoriesLayout>
  )
}
