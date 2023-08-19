import { Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useProductStore, useQuery, useCartStore, useAuthStore } from '../../hooks'
import { setBasketProduct } from '../../store/cart/thunks'
import { ContendProductPage } from '../components'

export const ProductPage = () => {
  const { status: isAuth } = useAuthStore()
  const { products } = useProductStore()
  const { status, basket } = useCartStore()
  const dispatch = useDispatch()
  const querys = useQuery()

  const queryId = querys.get('id')

  if (!products) {
    return (
      <>
        <ContendProductPage isLoading />
      </>
    )
  }

  const isValidProduct = products.find(product => product.id === queryId)

  if (!isValidProduct) return <Navigate to='not-found' replace />

  const isAuthenticated = isAuth === 'authenticated'

  const { name, value, stock, thumbnail, description, id } = isValidProduct

  const isExistProductCart = basket.some(product => product.id_product === id)

  const textLink = name.trim().replace(/ /g, '-').replace(/\//g, '')

  window.history.pushState(null, '', `/product/${textLink}?id=${id}`)

  const handleAddToBasket = () => {
    if (isExistProductCart) return
    dispatch(setBasketProduct({ id }))
  }

  return (
    <>
      <ContendProductPage
        name={name}
        value={value}
        stock={stock}
        thumbnail={thumbnail}
        description={description}
        id={id}
        handleAddToBasket={handleAddToBasket}
        status={status}
        statusProduct={isExistProductCart}
        isAuthenticated={isAuthenticated}
      />
    </>
  )
}
