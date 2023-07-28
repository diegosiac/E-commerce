import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { useProductStore } from '../../../src/hooks'
import { products } from '../../fixtures/productsFixtures'
import { HomePage } from '../../../src/home/pages/HomePage'

jest.mock('../../../src/hooks/useProductStore')

describe('Testing on <HomePage/>', () => {
  beforeEach(() => jest.clearAllMocks())

  test('should render the component with the loading state and display the skeleton of the product cards', () => {
    useProductStore.mockReturnValue({ products: null })

    render(<HomePage />)

    expect(screen.getAllByTestId('skeleton-product')).toBeTruthy()
  })

  test('You must render the component with the cards of the products with your information', () => {
    useProductStore.mockReturnValue({ products })

    render(
      <MemoryRouter initialEntries={['/']}>
        <HomePage />
      </MemoryRouter>
    )

    products.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeTruthy()
    })

    expect(screen.queryAllByTestId('skeleton-product').length).toBe(0)
  })
})
