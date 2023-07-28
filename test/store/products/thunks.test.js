import { ecommerceApi } from '../../../src/api'
import { clearAllProducts, clearSearch, setProducts, setQuerySearch } from '../../../src/store/products/productSlice'
import { clearAllSearch, clearProducts, getProductsApi, setQuery } from '../../../src/store/products/thunks'
import { products } from '../../fixtures/productsFixtures'

jest.mock('../../../src/api/ecommerceApi')

describe('Testing on thunks products', () => {
  const dispatch = jest.fn()

  beforeEach(() => jest.clearAllMocks())

  test('getProductsApi should call setProducts', async () => {
    const response = {
      data: {
        data: {
          products
        }
      }
    }

    ecommerceApi.get.mockResolvedValue(response)

    await getProductsApi()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(setProducts(response.data.data.products))
  })

  test('setQuery should call setQuerySearch', () => {
    const expectQuery = 'product 1'

    setQuery(expectQuery)(dispatch)

    expect(dispatch).toHaveBeenCalledWith(setQuerySearch(expectQuery))
  })

  test('clearProducts should call clearAllProducts', () => {
    clearProducts()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(clearAllProducts())
  })

  test('clearAllSearch should call clearSearch', () => {
    clearAllSearch()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(clearSearch())
  })
})
