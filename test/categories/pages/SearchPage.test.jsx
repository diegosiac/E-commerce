import { act, render, screen } from '@testing-library/react'
import { MemoryRouter, Navigate } from 'react-router-dom'
import { getProductSearch } from '../../../src/helpers'
import { SearchPage } from '../../../src/categories/pages/SearchPage'
import { products } from '../../fixtures/productsFixtures'

const mockSetQuery = jest.fn()

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => (fn) => fn()
}))

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Navigate: jest.fn()
}))

jest.mock('../../../src/store/products/thunks', () => ({
  setQuery: (queryRef) => () => mockSetQuery(queryRef)
}))

jest.mock('../../../src/helpers/getProductSearch', () => ({
  getProductSearch: jest.fn(() => Promise.resolve([]))
}))

describe('Testing on <SearchPage/>', () => {
  beforeEach(() => jest.clearAllMocks())

  test('should redirect to the "/" route if the query param "query" is not present', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <SearchPage />
      </MemoryRouter>
    )

    expect(Navigate).toHaveBeenCalledWith({ replace: true, to: '/' }, {})
    expect(mockSetQuery).not.toHaveBeenCalled()
    expect(getProductSearch).not.toHaveBeenCalled()
  })

  test('It should render the component without any search results and show the text "No se encontraron resultados"', async () => {
    const query = 'test'

    const location = { pathname: '/', search: `?query=${query}` }

    await act(async () => {
      render(
        <MemoryRouter initialEntries={[location]}>
          <SearchPage />
        </MemoryRouter>
      )
    })

    expect(mockSetQuery).toHaveBeenCalledWith(query)
    expect(getProductSearch).toHaveBeenCalledWith(query)
    expect(await screen.findByText(`Resultados para "${query}"`)).toBeTruthy()
    expect(screen.getByText('No se encontraron resultados')).toBeTruthy()
  })

  test('It must render the component with the information of each product that was found from the search', async () => {
    const query = 'test valid'

    const location = { pathname: '/', search: `?query=${query}` }

    getProductSearch.mockResolvedValue(products)

    await act(async () => {
      render(
        <MemoryRouter initialEntries={[location]}>
          <SearchPage />
        </MemoryRouter>
      )
    })

    expect(mockSetQuery).toHaveBeenCalledWith(query)
    expect(getProductSearch).toHaveBeenCalledWith(query)
    expect(await screen.findByText(`Resultados para "${query}"`)).toBeTruthy()
    expect(screen.queryByText('No se encontraron resultados')).toBeFalsy()

    products.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeTruthy()
    })
  })
})
