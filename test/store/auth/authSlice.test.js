import { authSlice, clearErrorMessage, onChecking, onLogin, onLogout } from '../../../src/store/auth/authSlice'
import { authenticatedState, demoUser, errorMessageState, initialState, notAuthenticatedState } from '../../fixtures/authFixtures'

describe('Testing on authSlice', () => {
  test('should return the initial state and be called "auth"', () => {
    const state = authSlice.reducer(initialState, {})

    expect(state).toEqual(initialState)
    expect(authSlice.name).toBe('auth')
  })

  test('must perform authentication', () => {
    const state = authSlice.reducer(initialState, onLogin(demoUser))

    expect(state).toEqual({
      status: 'authenticated',
      user: {
        email: demoUser.email,
        name: demoUser.name
      },
      errorMessage: undefined
    })
  })

  test('must perform onLogout without arguments', () => {
    const state = authSlice.reducer(authenticatedState, onLogout())

    expect(state).toEqual({
      status: 'not-authenticated',
      user: {},
      errorMessage: undefined
    })
  })

  test('it must perform the onLogout and show an error message', () => {
    const errorMessage = 'Credenciales no son correctas'
    const state = authSlice.reducer(authenticatedState, onLogout(errorMessage))

    expect(state).toEqual({
      status: 'not-authenticated',
      user: {},
      errorMessage
    })
  })

  test('you should remove the errorMessage', () => {
    const state = authSlice.reducer(errorMessageState, clearErrorMessage())

    expect(state.errorMessage).toBeUndefined()
  })

  test('should change the status to checking', () => {
    const state = authSlice.reducer(notAuthenticatedState, onChecking())

    expect(state).toEqual(initialState)
  })
})
