import { render, screen } from '@testing-library/react'
import { MemoryRouter, Navigate } from 'react-router-dom'
import { useCartStore } from '../../../src/hooks'
import { getOrder } from '../../../src/helpers'
import { userFixtures } from '../../fixtures/userFixtures'
import { OrderDetailsPage } from '../../../src/purchases/pages/OrderDetailsPage'

const pucharses = userFixtures.pucharses

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Navigate: jest.fn()
}))

jest.mock('../../../src/helpers/getOrder')

jest.mock('../../../src/hooks/useCartStore')

useCartStore.mockReturnValue({ pucharses })

describe('Testing on <OrderDetailsPage/>', () => {
  beforeEach(() => jest.clearAllMocks())

  test('should render the component correctly', () => {
    const purchase = pucharses[0]
    const query = purchase.id
    const location = { pathname: '/', search: `?id=${query}` }

    getOrder.mockReturnValue(purchase)

    render(
      <MemoryRouter initialEntries={[location]}>
        <OrderDetailsPage />
      </MemoryRouter>
    )

    const textElement = screen.queryByText((content) => content.includes(query))

    expect(textElement).toBeTruthy()
    expect(getOrder).toHaveBeenCalledWith(query, pucharses)
  })

  test('if the command does not exist then you must navigate to "/"', () => {
    getOrder.mockReturnValue(null)
    const query = '2332g23g'

    const location = { pathname: '/', search: `?id=${query}` }

    render(
      <MemoryRouter initialEntries={[location]}>
        <OrderDetailsPage />
      </MemoryRouter>
    )

    expect(getOrder).toHaveBeenCalledWith(query, pucharses)
    expect(Navigate).toHaveBeenCalledWith({ replace: true, to: '/' }, {})
  })
})
