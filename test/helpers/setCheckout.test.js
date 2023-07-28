import { ecommerceApi } from '../../src/api'
import { setCheckout } from '../../src/helpers'

jest.mock('../../src/api/ecommerceApi')

describe('Testing on "setCheckout.js"', () => {
  beforeEach(() => jest.clearAllMocks())

  test('should return the order object for successful request', async () => {
    const requestBody = { id: '1f23123f9weh' }
    const expectedOrder = { href: 'www.paypal.com/fahpeaeiofh' }

    const mockedResponse = { data: { order: expectedOrder } }
    ecommerceApi.post.mockResolvedValue(mockedResponse)

    const result = await setCheckout(requestBody)

    expect(result).toEqual(expectedOrder)
    expect(ecommerceApi.post).toHaveBeenCalledWith('payments', requestBody)
  })

  test('should return "request failed" when an error occurs', async () => {
    const requestBody = { id: '1f23123f9weh' }

    ecommerceApi.post.mockRejectedValue(new Error('Network error'))

    const result = await setCheckout(requestBody)

    expect(result).toBe('request failed')
    expect(ecommerceApi.post).toHaveBeenCalledWith('payments', requestBody)
  })
})
