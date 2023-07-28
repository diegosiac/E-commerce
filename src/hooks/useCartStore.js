import { useSelector } from 'react-redux'

export const useCartStore = () => {
  const { basket, status, idCheking, pucharses, messageError } = useSelector(state => state.cart)
  return {
    basket,
    status,
    idCheking,
    pucharses,
    messageError
  }
}
