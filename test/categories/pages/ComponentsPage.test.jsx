import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { useProductStore } from '../../../src/hooks'
import { CATEGORIES } from '../../../src/helpers/categories'
import { products } from '../../fixtures/productsFixtures'
import { ComponentsPage } from '../../../src/categories/pages/ComponentsPage'

jest.mock('../../../src/hooks/useProductStore')

describe('Testing on <ComponentsPage/>', () => {
  beforeEach(() => jest.clearAllMocks())

  test('should render the component with the loading state and display the skeleton of the product cards', () => {
    useProductStore.mockReturnValue({ products: null })

    render(<ComponentsPage />)

    expect(screen.getAllByTestId('skeleton-product')).toBeTruthy()
  })

  test('You must render the component with the cards of the products with your information', () => {
    useProductStore.mockReturnValue({ products })

    render(
      <MemoryRouter initialEntries={['/']}>
        <ComponentsPage />
      </MemoryRouter>
    )

    products.forEach(({ name, category }) => {
      if (category === CATEGORIES.COMPONENTS) {
        expect(screen.getByText(name)).toBeTruthy()
      }
    })

    expect(screen.getByText('Todos Nuestros Componentes')).toBeTruthy()
    expect(screen.queryAllByTestId('skeleton-product').length).toBe(0)
  })
})
