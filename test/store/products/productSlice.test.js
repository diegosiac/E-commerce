import { clearAllProducts, clearSearch, productSlice, setProducts, setQuerySearch } from '../../../src/store/products/productSlice'
import { complteState, initialState, products } from '../../fixtures/productsFixtures'

describe('Testing on productSlice', () => {
  test('should return the initial state and be called "product"', () => {
    const state = productSlice.reducer(initialState, {})

    expect(state).toEqual(initialState)
    expect(productSlice.name).toBe('product')
  })

  test('must change products', () => {
    const state = productSlice.reducer(initialState, setProducts(products))

    expect(state.products).toEqual(products)
  })

  test('you should change the query', () => {
    const expectQuery = 'product 1'

    const state = productSlice.reducer(initialState, setQuerySearch(expectQuery))

    expect(state.query).toEqual(expectQuery)
  })

  test('must clean products', () => {
    const state = productSlice.reducer(complteState, clearAllProducts())

    expect(state.products).toBeNull()
  })

  test('should return the query to the initial state', () => {
    const state = productSlice.reducer(complteState, clearSearch())

    expect(state.query).toBe('')
  })
})
