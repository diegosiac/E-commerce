import { ecommerceApi } from '../../api'
import { changeStatusItem, clearStatusItem, setErrorMessage, updateBasket } from './cartSlice'

export const setBasket = ({ newBasket, id }) => {
  return async (dispatch) => {
    try {
      dispatch(changeStatusItem(id))
      const { data } = await ecommerceApi.put('user/update/basket', newBasket)
      dispatch(updateBasket(data.user.products))
      dispatch(clearStatusItem())
    } catch (error) {
      dispatch(setErrorMessage('Hubo un error, inténtelo más tarde'))
    }
  }
}

export const setBasketProduct = ({ id }) => {
  return async (dispatch) => {
    try {
      dispatch(changeStatusItem(null))
      const { data } = await ecommerceApi.put('user/update/add', { id })
      dispatch(updateBasket(data.user.products))
      dispatch(clearStatusItem())
    } catch (error) {
      dispatch(setErrorMessage('Hubo un error, inténtelo más tarde'))
    }
  }
}
