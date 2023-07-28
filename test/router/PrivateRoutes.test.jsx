import { render, screen } from '@testing-library/react'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import { useAuthStore } from '../../src/hooks'
import { PrivateRoutes } from '../../src/router/PrivateRoutes'

jest.mock('../../src/hooks/useAuthStore')

jest.mock('../../src/user/pages/ProfilePage', () => ({
  ProfilePage: () => <h1>ProfilePage</h1>
}))

jest.mock('../../src/purchases/router/PurchasesRouter', () => ({
  PurchasesRouter: () => <h1>PurchasesRouter</h1>
}))

jest.mock('../../src/cart/pages/CartPage', () => ({
  CartPage: () => <h1>CartPage</h1>
}))

jest.mock('../../src/checkout/router/CheckoutRouter', () => ({
  CheckoutRouter: () => <h1>CheckoutRouter</h1>
}))

describe('Testing on <PrivateRoutes/>', () => {
  beforeEach(() => jest.clearAllMocks())

  test('if you are not authenticated you should redirect to auth', () => {
    useAuthStore.mockImplementation(() => ({ status: 'not-authenticated' }))

    render(
      <BrowserRouter basename='/'>
        <PrivateRoutes />
      </BrowserRouter>
    )

    expect(window.location.pathname).toBe('/auth')
  })

  test('should render the ProfilePage component', () => {
    useAuthStore.mockImplementation(() => ({ status: 'authenticated' }))

    render(
      <MemoryRouter initialEntries={['/profile']}>
        <PrivateRoutes />
      </MemoryRouter>
    )

    expect(screen.getByText('ProfilePage')).toBeTruthy()
  })

  test('should render the PurchasesRouter component', () => {
    useAuthStore.mockImplementation(() => ({ status: 'authenticated' }))

    render(
      <MemoryRouter initialEntries={['/my_purchases']}>
        <PrivateRoutes />
      </MemoryRouter>
    )

    expect(screen.getByText('PurchasesRouter')).toBeTruthy()
  })

  test('should render the CartPage component', () => {
    useAuthStore.mockImplementation(() => ({ status: 'authenticated' }))

    render(
      <MemoryRouter initialEntries={['/cart']}>
        <PrivateRoutes />
      </MemoryRouter>
    )

    expect(screen.getByText('CartPage')).toBeTruthy()
  })

  test('should render the CheckoutRouter component', () => {
    useAuthStore.mockImplementation(() => ({ status: 'authenticated' }))

    render(
      <MemoryRouter initialEntries={['/checkout']}>
        <PrivateRoutes />
      </MemoryRouter>
    )

    expect(screen.getByText('CheckoutRouter')).toBeTruthy()
  })
})
