import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { MemoryRouter } from 'react-router-dom'
import { authSlice } from '../../src/store/auth'
import { notAuthenticatedState } from '../fixtures/authFixtures'
import { AppRouter } from '../../src/router'
import { useCheckAuth } from '../../src/hooks/useCheckAuth'

const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  },
  preloadedState: {
    auth: notAuthenticatedState
  }
})

jest.mock('../../src/hooks/useCheckAuth')

jest.mock('../../src/home/pages/HomePage', () => ({
  HomePage: () => <h1>HomePage</h1>
}))

jest.mock('../../src/navbar/NavBar', () => ({
  NavBar: () => <h1>NavBar</h1>
}))

describe('Testing on <AppRouter/>', () => {
  beforeEach(() => jest.clearAllMocks())

  test('It must allow to show the auth page if it is not authenticated', () => {
    useCheckAuth.mockImplementation(() => ({ status: 'not-authenticated' }))

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/auth']}>
          <AppRouter />
        </MemoryRouter>
      </Provider>
    )

    expect(screen.getByText('Iniciar sesión')).toBeTruthy()
  })

  test('Should show home page', () => {
    useCheckAuth.mockImplementation(() => ({ status: 'authenticated' }))

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <AppRouter />
        </MemoryRouter>
      </Provider>
    )

    expect(screen.getByText('NavBar')).toBeTruthy()
    expect(screen.getByText('HomePage')).toBeTruthy()
  })

  test('If it is authenticated, the AUTH routes should not be shown', () => {
    useCheckAuth.mockImplementation(() => ({ status: 'authenticated' }))

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/auth']}>
          <AppRouter />
        </MemoryRouter>
      </Provider>
    )

    expect(screen.queryByText('Iniciar sesión')).toBeFalsy()
  })
})
