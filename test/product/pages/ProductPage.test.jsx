import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { useAuthStore, useCartStore, useProductStore } from '../../../src/hooks'
import { STATUS } from '../../../src/store/cart/options'
import { ProductPage } from '../../../src/product/pages'

const products = [
  {
    id: '123',
    name: 'product 1',
    value: 123,
    stock: 5,
    thumbnail: 'https://i.stack.imgur.com/ILTQq.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsam quidem, minus voluptate dicta'
  }
]

const mockSetBasketProduct = jest.fn()

jest.mock('../../../src/hooks/useAuthStore')
jest.mock('../../../src/hooks/useCartStore')
jest.mock('../../../src/hooks/useProductStore')

jest.mock('../../../src/store/cart/thunks', () => ({
  setBasketProduct: ({ id }) => () => mockSetBasketProduct({ id })
}))

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => (fn) => fn()
}))

describe('Testing on <ProductPage/>', () => {
  beforeEach(() => jest.clearAllMocks())

  test('should render the component in the loaded state', () => {
    useAuthStore.mockReturnValue({ status: 'authenticated' })
    useProductStore.mockReturnValue({ products: null })
    useCartStore.mockReturnValue({ status: STATUS.NONE, basket: [] })

    render(
      <MemoryRouter initialEntries={['/']}>
        <ProductPage />
      </MemoryRouter>
    )

    const allTextElements = screen.queryAllByText(text => text.length > 0)

    expect(allTextElements.length).toBe(1)
  })

  test('You should navigate to the "not-found" path if you dont find the product', () => {
    useAuthStore.mockReturnValue({ status: 'authenticated' })
    useProductStore.mockReturnValue({ products: [{ id: '123' }, { id: '1235' }] })
    useCartStore.mockReturnValue({ status: STATUS.NONE, basket: [] })

    render(
      <MemoryRouter initialEntries={['?id=1234']}>
        <Routes>
          <Route path='/' element={<ProductPage />} />
          <Route path='not-found' element={<h1>not found</h1>} />
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByText('not found')).toBeTruthy()
  })

  test('should render the component correctly with the information of the product found', () => {
    const expectPath = 'product-1'
    const expectId = '123'
    const expectName = 'product 1'

    useAuthStore.mockReturnValue({ status: 'authenticated' })
    useProductStore.mockReturnValue({ products })
    useCartStore.mockReturnValue({ status: STATUS.NONE, basket: [] })

    render(
      <MemoryRouter initialEntries={['?id=123']}>
        <ProductPage />
      </MemoryRouter>
    )

    expect(window.location.pathname.includes(expectPath)).toBeTruthy()
    expect(window.location.search.includes(expectId)).toBeTruthy()
    expect(screen.getByText(expectName)).toBeTruthy()
  })

  test('it must render the component and when clicking on "Agregar al carrito" you must add the product to the cart', () => {
    const id = '123'

    useAuthStore.mockReturnValue({ status: 'authenticated' })
    useProductStore.mockReturnValue({ products })
    useCartStore.mockReturnValue({ status: STATUS.NONE, basket: [] })

    render(
      <MemoryRouter initialEntries={['?id=123']}>
        <ProductPage />
      </MemoryRouter>
    )

    const btnAddBasket = screen.getByRole('button')
    fireEvent.click(btnAddBasket)

    expect(mockSetBasketProduct).toHaveBeenCalledWith({ id })
  })

  test('it must render the component and if the product is in the basket it must not be able to click and not add to cart', () => {
    useAuthStore.mockReturnValue({ status: 'authenticated' })
    useProductStore.mockReturnValue({ products })
    useCartStore.mockReturnValue({ status: STATUS.NONE, basket: [{ id_product: '123' }] })

    render(
      <MemoryRouter initialEntries={['?id=123']}>
        <ProductPage />
      </MemoryRouter>
    )

    const btnAddBasket = screen.getByRole('button')
    fireEvent.click(btnAddBasket)

    expect(mockSetBasketProduct).not.toHaveBeenCalled()
  })

  test('It must render the component and if it is not authenticated when clicking on "add to cart" it must redirect it to the "/auth" route', () => {
    useAuthStore.mockReturnValue({ status: 'not-authenticated' })
    useProductStore.mockReturnValue({ products })
    useCartStore.mockReturnValue({ status: STATUS.NONE, basket: [] })

    render(
      <MemoryRouter initialEntries={['/?id=123']}>
        <Routes>
          <Route path='/' element={<ProductPage />} />
          <Route path='/auth' element={<h1>auth</h1>} />
        </Routes>
      </MemoryRouter>
    )

    const btnAddBasket = screen.getByLabelText('AGREGAR AL CARRITO')
    fireEvent.click(btnAddBasket)

    expect(screen.getByText('auth')).toBeTruthy()
  })
})
