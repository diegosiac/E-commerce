import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ProductRouter } from '../../../src/product/router/ProductRouter'

jest.mock('../../../src/product/pages/ProductPage', () => ({
  ProductPage: () => <h1>ProductPage</h1>
}))

describe('Testing on <ProductRouter/>', () => {
  beforeEach(() => jest.clearAllMocks())

  test('should render the component ProductPage', () => {
    render(
      <MemoryRouter initialEntries={['/product']}>
        <ProductRouter />
      </MemoryRouter>
    )

    expect(screen.getByText('ProductPage')).toBeTruthy()
  })

  test('should render the component ProductNotFount', () => {
    render(
      <MemoryRouter initialEntries={['/not-found']}>
        <ProductRouter />
      </MemoryRouter>
    )

    expect(screen.getByText('404')).toBeTruthy()
  })

  test('If it does not find a route, it must be redirected to the component ProductNotFount', () => {
    render(
      <MemoryRouter initialEntries={['/a/not-exist-route']}>
        <ProductRouter />
      </MemoryRouter>
    )

    expect(screen.getByText('404')).toBeTruthy()
  })
})
