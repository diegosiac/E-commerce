import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../../../src/auth/routes/AuthRoutes'

jest.mock('../../../src/auth/pages/LoginPage', () => ({
  LoginPage: () => <h1>LoginPage</h1>
}))

jest.mock('../../../src/auth/pages/RegisterPage', () => ({
  RegisterPage: () => <h1>RegisterPage</h1>
}))

describe('Testing on <AuthRoutes/>', () => {
  beforeEach(() => jest.clearAllMocks())

  test('should render the component LoginPage', () => {
    render(
      <MemoryRouter initialEntries={['/auth/login']}>
        <Routes>
          <Route path='auth/*' element={<AuthRoutes />} />
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByText('LoginPage')).toBeTruthy()
  })

  test('should render the component RegisterPage', () => {
    render(
      <MemoryRouter initialEntries={['/auth/register']}>
        <Routes>
          <Route path='auth/*' element={<AuthRoutes />} />
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByText('RegisterPage')).toBeTruthy()
  })

  test('if it doesnt match any route it should direct it to "/auth/login"', () => {
    render(
      <MemoryRouter initialEntries={['/auth/not-route']} initialIndex={['1']}>
        <Routes>
          <Route path='auth/*' element={<AuthRoutes />} />
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByText('LoginPage')).toBeTruthy()
  })
})
