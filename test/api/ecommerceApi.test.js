import { ecommerceApi } from '../../src/api'

describe('Testing in ecommerceApi', () => {
  test('should have default settings', () => {
    expect(ecommerceApi.defaults.baseURL).toBe(process.env.VITE_API_URL)
  })

  test('must have the x-token in the header of all requests', async () => {
    const token = 'ABC-123-XYZ'

    localStorage.setItem('token', token)

    try {
      await ecommerceApi.get('/auth')
    } catch (error) {
      expect(error.config.headers['x-token']).toBe(token)
    }
  })
})
