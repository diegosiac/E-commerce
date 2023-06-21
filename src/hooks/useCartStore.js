import { useSelector } from 'react-redux'

export const useCartStore = () => {
  const { basket } = useSelector(state => state.cart)
  return {
    basket
  }
}
