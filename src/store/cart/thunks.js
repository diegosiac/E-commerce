import ecommerceApi from '../../api/ecommerceApi'
import { updateBasket } from './cartSlice'

export const setBasket = (basket) => {
  return async (dispatch) => {
    try {
    //   const { data } = await ecommerceApi.put('user/basket', basket)

      dispatch(updateBasket({ products: basket }))
    } catch (error) {

    }
  }
}
