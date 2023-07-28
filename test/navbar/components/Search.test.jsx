import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { useProductStore } from '../../../src/hooks'
import { getProductSearch } from '../../../src/helpers'
import { Search } from '../../../src/navbar/components'

const mockSetQuery = jest.fn()
const mockedUseNavigate = jest.fn()

jest.mock('../../../src/hooks/useProductStore')
jest.mock('../../../src/helpers/getProductSearch')

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate
}))

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => (fn) => fn()
}))

jest.mock('../../../src/store/products/thunks', () => ({
  setQuery: (newValue) => () => mockSetQuery(newValue)
}))

describe('Pruebas en <Search/>', () => {
  beforeEach(() => jest.clearAllMocks())

  test('You must search for a product to show the results ', async () => {
    const products = [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }]
    const query = 'Product'

    useProductStore.mockReturnValue({ query: 'product' })
    getProductSearch.mockResolvedValue(products)

    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    )

    const searchInput = screen.getByPlaceholderText('Busca reparaciones y mas..')

    fireEvent.change(searchInput, { target: { value: query } })

    expect(mockSetQuery).toHaveBeenCalledWith(query)

    await waitFor(() => {
      expect(getProductSearch).toHaveBeenCalledWith('product')
      expect(screen.getByText('Product 1')).toBeTruthy()
      expect(screen.getByText('Product 2')).toBeTruthy()
    })
  })

  test('you need to search for the products and submit the form and submit to the search path', async () => {
    const products = [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }]
    const query = 'Product'

    useProductStore.mockReturnValue({ query: 'product' })
    getProductSearch.mockResolvedValue(products)

    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    )

    const searchInput = screen.getByPlaceholderText('Busca reparaciones y mas..')

    fireEvent.change(searchInput, { target: { value: query } })

    expect(mockSetQuery).toHaveBeenCalledWith(query)

    await waitFor(() => {
      expect(getProductSearch).toHaveBeenCalledWith('product')
    })

    const form = screen.getByTestId('form-search')
    fireEvent.submit(form)

    expect(mockedUseNavigate).toHaveBeenCalledWith('/categories/search?query=product', { replace: true })
  })

  test('You must search for the products and click on the search icon and send it to the search path', async () => {
    const products = [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }]
    const query = 'Product'

    useProductStore.mockReturnValue({ query: 'product' })
    getProductSearch.mockResolvedValue(products)

    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    )

    const searchInput = screen.getByPlaceholderText('Busca reparaciones y mas..')

    fireEvent.change(searchInput, { target: { value: query } })

    expect(mockSetQuery).toHaveBeenCalledWith(query)

    await waitFor(() => {
      expect(getProductSearch).toHaveBeenCalledWith('product')
    })

    const btn = screen.getByRole('button')
    fireEvent.click(btn)

    expect(mockedUseNavigate).toHaveBeenCalledWith('/categories/search?query=product', { replace: true })
  })
})
