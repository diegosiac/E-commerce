import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { CategoriesRouter } from '../../../src/categories/router/CategoriesRouter'

jest.mock('../../../src/categories/pages/RepairsPage', () => ({
  RepairsPage: () => <h1>RepairsPage</h1>
}))

jest.mock('../../../src/categories/pages/ComponentsPage', () => ({
  ComponentsPage: () => <h1>ComponentsPage</h1>
}))

jest.mock('../../../src/categories/pages/DevicesPage', () => ({
  DevicesPage: () => <h1>DevicesPage</h1>
}))

jest.mock('../../../src/categories/pages/SearchPage', () => ({
  SearchPage: () => <h1>SearchPage</h1>
}))

describe('Testing on <CategoriesRouter/>', () => {
  beforeEach(() => jest.clearAllMocks())

  test('should render the component RepairsPage', () => {
    render(
      <MemoryRouter initialEntries={['/repairs']}>
        <CategoriesRouter />
      </MemoryRouter>
    )

    expect(screen.getByText('RepairsPage')).toBeTruthy()
  })

  test('should render the component ComponentsPage', () => {
    render(
      <MemoryRouter initialEntries={['/components']}>
        <CategoriesRouter />
      </MemoryRouter>
    )

    expect(screen.getByText('ComponentsPage')).toBeTruthy()
  })

  test('should render the component DevicesPage', () => {
    render(
      <MemoryRouter initialEntries={['/devices']}>
        <CategoriesRouter />
      </MemoryRouter>
    )

    expect(screen.getByText('DevicesPage')).toBeTruthy()
  })

  test('should render the component SearchPage', () => {
    render(
      <MemoryRouter initialEntries={['/search']}>
        <CategoriesRouter />
      </MemoryRouter>
    )

    expect(screen.getByText('SearchPage')).toBeTruthy()
  })

  test('if it doesnt match any route it should direct it to "/" ', () => {
    render(
      <MemoryRouter initialEntries={['/data/not-existeRoute']}>
        <Routes>
          <Route path='data/*' element={<CategoriesRouter />} />
          <Route path='/' element={<h1>Home</h1>} />
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByText('Home')).toBeTruthy()
  })
})
