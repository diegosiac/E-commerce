import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { formaterValue } from '../../../src/helpers'
import { basketFixtures } from '../../fixtures/basketFixtures'
import { PriceBox } from '../../../src/cart/components/PriceBox'

describe('Testing on <PriceBox/>', () => {
  test('should ', () => {
    render(
      <MemoryRouter>
        <PriceBox products={basketFixtures} />
      </MemoryRouter>
    )

    const totalProducts = basketFixtures.reduce((accum, product) => accum + product.quantity, 0)
    const totalPrice = basketFixtures.reduce((accum, product) => accum + (product.value * product.quantity), 0)

    const value = formaterValue(totalPrice)

    expect(screen.queryAllByText((content) => content.includes(value))).toBeTruthy()
    expect(screen.getByText(`Productos (${totalProducts})`)).toBeTruthy()
  })

  test('should ', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path='/' element={<PriceBox products={basketFixtures} />} />
          <Route path='/checkout' element={<>Checkout Page</>} />
        </Routes>
      </MemoryRouter>
    )

    const btnShop = screen.getByRole('link', { name: 'Continuar compra' })
    fireEvent.click(btnShop)

    expect(screen.getByText('Checkout Page')).toBeTruthy()
  })
})
