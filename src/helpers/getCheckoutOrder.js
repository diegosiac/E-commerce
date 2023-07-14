import { ecommerceApi } from '../api'

export const getCheckoutOrder = async ({ orderId }) => {
  try {
    const { data } = await ecommerceApi.get('user/consult/order', { params: { orderId } })
    if (!data.ok) return undefined

    return data.user.order
  } catch (error) {
    return undefined
  }
}
