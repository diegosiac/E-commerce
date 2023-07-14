import { ecommerceApi } from '../../api'
import { setProducts, clearAllProducts, clearSearch, setQuerySearch } from './productSlice'

export const getProductsApi = () => {
  return async (dispatch) => {
    try {
      const { data } = await ecommerceApi.get('products')
      dispatch(setProducts(data.data.products))
    } catch (error) {
    }
  }
}

export const setQuery = (query) => {
  return (dispatch) => {
    dispatch(setQuerySearch(query))
  }
}

export const clearProducts = () => {
  return (dispatch) => {
    dispatch(clearAllProducts())
  }
}

export const clearAllSearch = () => {
  return (dispatch) => {
    dispatch(clearSearch())
  }
}
