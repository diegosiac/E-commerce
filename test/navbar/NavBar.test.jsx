import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { NavBar } from '../../src/navbar/NavBar'
import { useAuthStore, useCartStore } from '../../src/hooks'
import { basketFixtures } from '../fixtures/basketFixtures'

jest.mock('../../src/hooks/useCartStore')
jest.mock('../../src/hooks/useAuthStore')
jest.mock('../../src/navbar/components/Search', () => ({
  Search: () => <>Search</>
}))

describe('Testing on <NavBar/>', () => {
  beforeEach(() => jest.clearAllMocks())

  test('should render the component and display the username and the quantity of products in the cart', () => {
    const user = {
      name: 'testUser',
      email: 'test@test.com'
    }

    useAuthStore.mockReturnValue({ user, status: 'authenticated' })
    useCartStore.mockReturnValue({ basket: basketFixtures })

    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    )

    const totalProducts = basketFixtures.reduce((accum, item) => {
      if (item.stock > 0) {
        accum += item.quantity
      }

      return accum
    }, 0)

    expect(screen.getByText(user.name)).toBeTruthy()
    expect(screen.getByText(totalProducts)).toBeTruthy()
  })

  test('if not authenticated it should show "Inicar Sesion"', () => {
    useAuthStore.mockReturnValue({ user: {}, status: 'not-authenticated' })
    useCartStore.mockReturnValue({ basket: [] })
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    )

    expect(screen.getByText('Inicar Sesion')).toBeTruthy()
  })
})
