import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { useProductStore } from '../../../src/hooks'
import { CATEGORIES } from '../../../src/helpers/categories'
import { products } from '../../fixtures/productsFixtures'
import { DevicesPage } from '../../../src/categories/pages/DevicesPage'

jest.mock('../../../src/hooks/useProductStore')

describe('Testing on <DevicesPage/>', () => {
  beforeEach(() => jest.clearAllMocks())

  test('should render the component with the loading state and display the skeleton of the product cards', () => {
    useProductStore.mockReturnValue({ products: null })

    render(<DevicesPage />)

    expect(screen.getAllByTestId('skeleton-product')).toBeTruthy()
  })

  test('You must render the component with the cards of the products with your information', () => {
    useProductStore.mockReturnValue({ products })

    render(
      <MemoryRouter initialEntries={['/']}>
        <DevicesPage />
      </MemoryRouter>
    )

    products.forEach(({ name, category }) => {
      if (category === CATEGORIES.DEVICES) {
        expect(screen.getByText(name)).toBeTruthy()
      }
    })

    expect(screen.getByText('Todos Nuestros Dispositivos')).toBeTruthy()
    expect(screen.queryAllByTestId('skeleton-product').length).toBe(0)
  })
})
