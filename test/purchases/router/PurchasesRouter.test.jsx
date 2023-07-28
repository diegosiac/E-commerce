import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { PurchasesRouter } from '../../../src/purchases/router/PurchasesRouter'

jest.mock('../../../src/purchases/pages/PurchasesPage', () => ({
  PurchasesPage: () => <h1>PurchasesPage</h1>
}))

jest.mock('../../../src/purchases/pages/OrderDetailsPage', () => ({
  OrderDetailsPage: () => <h1>OrderDetailsPage</h1>
}))

describe('Testing on <PurchasesRouter/>', () => {
  beforeEach(() => jest.clearAllMocks())

  test('The component must render correctly when it is in the "/" path and it must appear in the "Mis Compras" navbar', () => {
    render(
      <MemoryRouter initialEntries={['/my_purchases']}>
        <PurchasesRouter />
      </MemoryRouter>
    )

    expect(screen.getByText('PurchasesPage')).toBeTruthy()
    expect(screen.getByText('Mis Compras')).toBeTruthy()
    expect(screen.queryByText('Detalles del pedido')).toBeFalsy()
  })

  test('The component must render correctly when it is in the "/order-details" path and it must appear in the "Detalles del pedido" navbar', () => {
    render(
      <MemoryRouter initialEntries={['/order-details']}>
        <PurchasesRouter />
      </MemoryRouter>
    )

    expect(screen.getByText('OrderDetailsPage')).toBeTruthy()
    expect(screen.queryByText('Detalles del pedido')).toBeTruthy()
  })
})
