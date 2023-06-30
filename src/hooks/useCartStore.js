import { useSelector } from 'react-redux'

export const useCartStore = () => {
  const { basket, status, idCheking, pucharses } = useSelector(state => state.cart)
  return {
    basket,
    status,
    pucharses,
    idCheking
  }
}
