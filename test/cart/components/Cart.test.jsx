import { fireEvent, render, screen } from '@testing-library/react'
import { useCartStore } from '../../../src/hooks'
import { STATUS } from '../../../src/store/cart'
import { basketAllFixtures, basketFixtures } from '../../fixtures/basketFixtures'
import { Cart } from '../../../src/cart/components'

const mockSetBasket = jest.fn()

jest.mock('../../../src/hooks/useCartStore')

jest.mock('../../../src/store/cart/thunks', () => ({
  setBasket: ({ newBasket, id }) => () => mockSetBasket({ newBasket, id })
}))

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => (fn) => fn()
}))

describe('Testing on <Cart/>', () => {
  beforeEach(() => jest.clearAllMocks())

  test('you should render the component and remove a product from the cart', () => {
    useCartStore.mockReturnValue({ status: STATUS.NONE, idCheking: null })

    render(<Cart products={basketAllFixtures} />)

    const btnDelete = screen.getAllByRole('button', { name: 'Eliminar' })
    fireEvent.click(btnDelete[0])

    expect(mockSetBasket).toHaveBeenCalled()
  })

  test('should render the component and increase the quantity of a cart product', () => {
    useCartStore.mockReturnValue({ status: STATUS.NONE, idCheking: null })

    render(<Cart products={basketAllFixtures} />)

    const btnDelete = screen.getAllByRole('button', { name: '-' })
    fireEvent.click(btnDelete[0])

    expect(mockSetBasket).toHaveBeenCalled()
  })

  test('you should render the component and decrease the quantity of a cart product', () => {
    useCartStore.mockReturnValue({ status: STATUS.NONE, idCheking: null })

    render(<Cart products={basketFixtures} />)

    const btnDelete = screen.getAllByRole('button', { name: '+' })
    fireEvent.click(btnDelete[0])

    expect(mockSetBasket).toHaveBeenCalled()
  })

  test('should render the component and display the products correctly', () => {
    useCartStore.mockReturnValue({ status: STATUS.NONE, idCheking: null })

    render(<Cart products={basketFixtures} />)

    basketFixtures.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeTruthy()
    })
  })

  test('should render the component and show the available products as not the already available ones', () => {
    useCartStore.mockReturnValue({ status: STATUS.NONE, idCheking: null })

    render(<Cart products={basketAllFixtures} />)
    const products = basketAllFixtures.filter(item => item.stock === 0)

    expect(screen.getAllByTestId('ItemProductNotAvalible').length).toBe(products.length)

    basketAllFixtures.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeTruthy()
    })
  })

  test('if the cart is empty it should show the message "Tu carrito está vacío"', () => {
    useCartStore.mockReturnValue({ status: STATUS.NONE, idCheking: null })

    render(<Cart products={[]} />)

    expect(screen.getByText('Tu carrito está vacío')).toBeTruthy()
    expect(screen.getByText('¡Los mejores productos tecnológicos te esperan!')).toBeTruthy()
  })
})
