import { googleGeoApi } from '../../src/api'

describe('Testing in googleGeoApi', () => {
  test('should have default settings', () => {
    expect(googleGeoApi.defaults.baseURL).toBe(process.env.VITE_GOOGLE_URL)
  })

  test('debe de tener el key en los params de todas las peticiones', async () => {
    try {
      await googleGeoApi.get('/')
    } catch (error) {
      expect(error.config.params.key).toBe(process.env.VITE_GOOGLE_KEY)
    }
  })
})
