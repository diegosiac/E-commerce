import { ecommerceApi } from '../../src/api'
import { getCheckoutOrder } from '../../src/helpers'

jest.mock('../../src/api/ecommerceApi')

describe('Testing on "getCheckoutOrder.js"', () => {
  beforeEach(() => jest.clearAllMocks())

  test('should return the order data when API call is successful', async () => {
    const orderId = '12345'
    const responseData = { ok: true, user: { order: { id: orderId } } }
    ecommerceApi.get.mockResolvedValueOnce({ data: responseData })

    const result = await getCheckoutOrder({ orderId })

    expect(result).toEqual(responseData.user.order)
    expect(ecommerceApi.get).toHaveBeenCalledWith('user/consult/order', { params: { orderId } })
  })

  test('should return undefined when API call fails or returns invalid data', async () => {
    const orderId = '54321'
    const responseData = { ok: false, user: { order: null } }
    ecommerceApi.get.mockResolvedValueOnce({ data: responseData })

    const result = await getCheckoutOrder({ orderId })

    expect(result).toBeUndefined()
    expect(ecommerceApi.get).toHaveBeenCalledWith('user/consult/order', { params: { orderId } })
  })
})
