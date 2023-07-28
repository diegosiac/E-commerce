import { ecommerceApi } from '../api'

export const setCheckout = async (body) => {
  try {
    const { data } = await ecommerceApi.post('payments', body)
    return data.order
  } catch (error) {
    return 'request failed'
  }
}
