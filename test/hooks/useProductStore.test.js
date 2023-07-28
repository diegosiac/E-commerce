import { useSelector } from 'react-redux'
import { useProductStore } from '../../src/hooks'
import { productSearch } from '../fixtures/productsFixtures'

const mockProductState = {
  products: productSearch,
  query: 'product 1'
}

jest.mock('react-redux', () => ({
  useSelector: jest.fn()
}))

describe('Testing on useProductStore', () => {
  beforeEach(() => jest.clearAllMocks())

  test('should return the correct values when state has the expected structure', () => {
    useSelector.mockReturnValue(mockProductState)

    const { products, query } = useProductStore()

    expect(products).toBe(productSearch)
    expect(query).toBe('product 1')
  })

  test('should return default values or undefined when state does not have the expected structure', () => {
    useSelector.mockReturnValue({})

    const { products, query } = useProductStore()

    expect(products).toBeUndefined()
    expect(query).toBeUndefined()
  })
})
