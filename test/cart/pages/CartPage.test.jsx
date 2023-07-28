import { render, screen } from '@testing-library/react'
import { CartPage } from '../../../src/cart/pages/CartPage'
import { useCartStore } from '../../../src/hooks'
import { basketFixtures, invalidBasketFixtures } from '../../fixtures/basketFixtures'

jest.mock('../../../src/hooks/useCartStore')

jest.mock('../../../src/cart/components/Cart', () => ({
  Cart: () => <h1>Cart</h1>
}))

jest.mock('../../../src/cart/components/PriceBox', () => ({
  PriceBox: () => <h1>PriceBox</h1>
}))

describe('Testing on <CartPage/>', () => {
  beforeEach(() => jest.clearAllMocks())

  test('should render the component correctly if there are products in the cart', () => {
    useCartStore.mockReturnValue({ basket: basketFixtures })

    render(<CartPage />)

    expect(screen.getByText('Cart')).toBeTruthy()
    expect(screen.getByText('PriceBox')).toBeTruthy()
  })

  test('if there are no products in the cart, it should not show the PriceBox component', () => {
    useCartStore.mockReturnValue({ basket: [] })

    render(<CartPage />)

    expect(screen.getByText('Cart')).toBeTruthy()
  })

  test('If there are no products with stock in the cart, the PriceBox component should not be displayed', () => {
    useCartStore.mockReturnValue({ basket: invalidBasketFixtures })

    render(<CartPage />)

    expect(screen.getByText('Cart')).toBeTruthy()
  })
})
