import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { PurchasesPage } from '../../../src/purchases/pages/PurchasesPage'
import { useCartStore } from '../../../src/hooks'
import { userFixtures } from '../../fixtures/userFixtures'

jest.mock('../../../src/hooks/useCartStore')

describe('Testing on <PurchasesPage/>', () => {
  beforeEach(() => jest.clearAllMocks())

  test('you should render the component with a list of pucharses', () => {
    const pucharses = userFixtures.pucharses

    useCartStore.mockReturnValue({ pucharses })

    render(
      <MemoryRouter initialEntries={['/']}>
        <PurchasesPage />
      </MemoryRouter>
    )

    pucharses.forEach(({ id }) => {
      const textElement = screen.queryByText((content) => content.includes(id))

      expect(textElement).toBeTruthy()
    })

    expect(screen.queryByText('Aún no ha hecho una compra')).toBeFalsy()
  })

  test('should render the component with a "Aún no ha hecho una compra" message in case there is no purchase', () => {
    useCartStore.mockReturnValue({ pucharses: [] })

    render(<PurchasesPage />)

    expect(screen.getByText('Aún no ha hecho una compra')).toBeTruthy()
  })
})
