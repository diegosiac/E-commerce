import { googleGeoApi } from '../../src/api'
import { getLocation } from '../../src/helpers'

jest.mock('../../src/api/googleGeoApi')

describe('Testing on "getLocation.js"', () => {
  beforeEach(() => jest.clearAllMocks())

  test('should return valid results when providing valid country and zip', async () => {
    const country = 'US'
    const zip = '90210'
    const expectedResult = [{ data: { cp: '52343' } }]

    googleGeoApi.get.mockResolvedValueOnce({ data: { status: 'OK', results: expectedResult } })

    const result = await getLocation({ country, zip })

    expect(result).toEqual(expectedResult)
  })

  test('should return undefined with invalid country or zip', async () => {
    const invalidCountry = 'ABC'
    const validZip = '90210'
    const invalidZip = '123'

    const validCountryResult = [{ data: { cp: '52343' } }]

    googleGeoApi.get.mockResolvedValue({ data: { status: 'NOT RESULTS', results: validCountryResult } })

    const resultWithInvalidCountry = await getLocation({ country: invalidCountry, zip: validZip })
    const resultWithInvalidZip = await getLocation({ country: 'US', zip: invalidZip })

    expect(resultWithInvalidCountry).toBeUndefined()
    expect(resultWithInvalidZip).toBeUndefined()
  })

  test('should return error when API call fails', async () => {
    const country = 'US'
    const zip = '90210'

    googleGeoApi.get.mockRejectedValueOnce(new Error('Error getLocation'))

    const result = await getLocation({ country, zip })

    expect(result).toBeUndefined()
  })
})
