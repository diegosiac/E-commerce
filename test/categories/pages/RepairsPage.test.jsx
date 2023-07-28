import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { useProductStore } from '../../../src/hooks'
import { CATEGORIES } from '../../../src/helpers/categories'
import { products } from '../../fixtures/productsFixtures'
import { RepairsPage } from '../../../src/categories/pages/RepairsPage'

jest.mock('../../../src/hooks/useProductStore')

describe('Testing on <RepairsPage/>', () => {
  beforeEach(() => jest.clearAllMocks())

  test('should render the component with the loading state and display the skeleton of the product cards', () => {
    useProductStore.mockReturnValue({ products: null })

    render(<RepairsPage />)

    expect(screen.getAllByTestId('skeleton-product')).toBeTruthy()
  })

  test('You must render the component with the cards of the products with your information', () => {
    useProductStore.mockReturnValue({ products })

    render(
      <MemoryRouter initialEntries={['/']}>
        <RepairsPage />
      </MemoryRouter>
    )

    products.forEach(({ name, category }) => {
      if (category === CATEGORIES.REPAIRS) {
        expect(screen.getByText(name)).toBeTruthy()
      }
    })

    expect(screen.getByText('Todas Nuestras Reparaciónes')).toBeTruthy()
    expect(screen.queryAllByTestId('skeleton-product').length).toBe(0)
  })
})
