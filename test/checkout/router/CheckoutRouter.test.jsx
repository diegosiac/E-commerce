import { render, screen } from '@testing-library/react'
import { CheckoutRouter } from '../../../src/checkout/router/CheckoutRouter'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { useCartStore } from '../../../src/hooks'
import { basketFixtures } from '../../fixtures/basketFixtures'

jest.mock('../../../src/checkout/pages/CheckoutPage', () => ({
  CheckoutPage: () => <>CheckoutPage</>
}))

jest.mock('../../../src/checkout/pages/ExecutePaymentPage', () => ({
  ExecutePaymentPage: () => <>ExecutePaymentPage</>
}))
jest.mock('../../../src/checkout/pages/CancelPaymentPage', () => ({
  CancelPaymentPage: () => <>CancelPaymentPage</>
}))

jest.mock('../../../src/hooks/useCartStore')

describe('Testing on <CheckoutRouter/>', () => {
  beforeEach(() => jest.clearAllMocks())

  test('If there are no products in the cart, it should not show the route "/" and should redirect it to home', () => {
    useCartStore.mockReturnValue({ basket: [] })

    render(
      <MemoryRouter initialEntries={['/checkout']}>
        <Routes>
          <Route path='checkout/*' element={<CheckoutRouter />} />
          <Route path='/' element={<>Home</>} />
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByText('Home')).toBeTruthy()
  })

  test('should render the component CheckoutPage', () => {
    useCartStore.mockReturnValue({ basket: basketFixtures })

    render(
      <MemoryRouter initialEntries={['/']}>
        <CheckoutRouter />
      </MemoryRouter>
    )

    expect(screen.getByText('CheckoutPage')).toBeTruthy()
  })

  test('should render the component ExecutePaymentPage', () => {
    useCartStore.mockReturnValue({ basket: basketFixtures })

    render(
      <MemoryRouter initialEntries={['/execute_payment']}>
        <CheckoutRouter />
      </MemoryRouter>
    )

    expect(screen.getByText('ExecutePaymentPage')).toBeTruthy()
  })

  test('should render the component CancelPaymentPage', () => {
    useCartStore.mockReturnValue({ basket: basketFixtures })

    render(
      <MemoryRouter initialEntries={['/cancel_payment']}>
        <CheckoutRouter />
      </MemoryRouter>
    )

    expect(screen.getByText('CancelPaymentPage')).toBeTruthy()
  })
})
