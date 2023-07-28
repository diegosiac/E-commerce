import { ecommerceApi } from '../../src/api'
import { getProductSearch } from '../../src/helpers'
import { productSearch } from '../fixtures/productsFixtures'

jest.mock('../../src/api/ecommerceApi')

describe('Testing on "getProductSearch.js"', () => {
  beforeEach(() => jest.clearAllMocks())

  test('should return an array of search results for valid query', async () => {
    const validQuery = 'mobile'
    const expectedResult = productSearch

    const mockedResponse = { data: { queries: expectedResult } }
    ecommerceApi.get.mockResolvedValue(mockedResponse)

    const result = await getProductSearch(validQuery)

    expect(result).toEqual(expectedResult)
    expect(ecommerceApi.get).toHaveBeenCalledWith('search', { params: { query: validQuery } })
  })

  test('should return an empty array when no results found', async () => {
    const queryWithoutResults = 'xyz'
    const expectedResult = []

    const mockedResponse = { data: { queries: [] } }
    ecommerceApi.get.mockResolvedValue(mockedResponse)

    const result = await getProductSearch(queryWithoutResults)

    expect(result).toEqual(expectedResult)
    expect(ecommerceApi.get).toHaveBeenCalledWith('search', { params: { query: queryWithoutResults } })
  })

  test('should return undefined when an error occurs', async () => {
    const invalidQuery = 'invalid'

    ecommerceApi.get.mockRejectedValue(new Error('Network error'))

    const result = await getProductSearch(invalidQuery)

    expect(result).toBeUndefined()
    expect(ecommerceApi.get).toHaveBeenCalledWith('search', { params: { query: invalidQuery } })
  })
})
