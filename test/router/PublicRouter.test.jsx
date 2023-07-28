import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { PublicRouter } from '../../src/router'

const mockGetProductsApi = jest.fn()
const mockClearProducts = jest.fn()

jest.mock('../../src/store/products/thunks', () => ({
  getProductsApi: () => mockGetProductsApi,
  clearProducts: () => mockClearProducts
}))

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => (fn) => fn()
}))

jest.mock('../../src/navbar/NavBar', () => ({
  NavBar: () => <h1>NavBar</h1>
}))

jest.mock('../../src/router/PrivateRoutes', () => ({
  PrivateRoutes: () => <h1>PrivateRoutes</h1>
}))

jest.mock('../../src/home/pages/HomePage', () => ({
  HomePage: () => <h1>HomePage</h1>
}))

jest.mock('../../src/product/router/ProductRouter', () => ({
  ProductRouter: () => <h1>ProductRouter</h1>
}))

jest.mock('../../src/categories/router/CategoriesRouter', () => ({
  CategoriesRouter: () => <h1>CategoriesRouter</h1>
}))

describe('Testing on <PublicRouter/>', () => {
  beforeEach(() => jest.clearAllMocks())

  test('getProductsApi should be called when the component is mounted and clearProducts when it is unmounted', () => {
    const { unmount } = render(
      <MemoryRouter initialEntries={['/']}>
        <PublicRouter />
      </MemoryRouter>
    )
    expect(mockGetProductsApi).toHaveBeenCalled()

    unmount()

    expect(mockClearProducts).toHaveBeenCalled()
  })

  test('should render the ProductRouter component', () => {
    render(
      <MemoryRouter initialEntries={['/product']}>
        <PublicRouter />
      </MemoryRouter>
    )

    expect(screen.getByText('ProductRouter')).toBeTruthy()
  })

  test('should render the CategoriesRouter component', () => {
    render(
      <MemoryRouter initialEntries={['/categories']}>
        <PublicRouter />
      </MemoryRouter>
    )

    expect(screen.getByText('CategoriesRouter')).toBeTruthy()
  })

  test('should render the HomePage component', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <PublicRouter />
      </MemoryRouter>
    )

    expect(screen.getByText('HomePage')).toBeTruthy()
  })

  test('should render the PrivateRoutes component', () => {
    render(
      <MemoryRouter initialEntries={['/private-routes']}>
        <PublicRouter />
      </MemoryRouter>
    )

    expect(screen.getByText('PrivateRoutes')).toBeTruthy()
  })
})
