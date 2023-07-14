import { useSelector } from 'react-redux'

export const useProductStore = () => {
  const { products, query } = useSelector(state => state.products)
  return {
    products,
    query
  }
}
