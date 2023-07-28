import { fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import { ProfilePage } from '../../../src/user/pages/ProfilePage'
import { authSlice } from '../../../src/store/auth'
import { authenticatedState } from '../../fixtures/authFixtures'

const mockStartLogout = jest.fn()

jest.mock('../../../src/store/auth/thunks', () => ({
  startLogout: () => mockStartLogout
}))

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => (fn) => fn()
}))

const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  },
  preloadedState: {
    auth: authenticatedState
  }
})

describe('tests is <ProfilePage/>', () => {
  beforeEach(() => jest.clearAllMocks())

  test('should display user information', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProfilePage />
        </MemoryRouter>
      </Provider>
    )

    expect(screen.getByText(authenticatedState.user.email)).toBeTruthy()
    expect(screen.getByText(authenticatedState.user.name)).toBeTruthy()
  })

  test('You must click the button and log out', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProfilePage />
        </MemoryRouter>
      </Provider>
    )

    const buttonLogOut = screen.getByRole('button')
    fireEvent.click(buttonLogOut)

    expect(mockStartLogout).toHaveBeenCalled()
  })

  test('You have to click on "IR A MIS COMPRAS" and change the url', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ProfilePage />
        </BrowserRouter>
      </Provider>
    )

    const a = screen.getByText('IR A MIS COMPRAS')
    fireEvent.click(a)

    expect(window.location.pathname).toBe('/my_purchases')
  })
})
