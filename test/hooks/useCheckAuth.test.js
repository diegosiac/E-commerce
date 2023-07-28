import { renderHook } from '@testing-library/react'
import { useAuthStore, useCheckAuth } from '../../src/hooks'

const mockCheckingAuthentication = jest.fn()

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => (fn) => fn()
}))

jest.mock('../../src/store/auth/thunks', () => ({
  checkingAuthentication: () => mockCheckingAuthentication
}))

jest.mock('../../src/hooks/useAuthStore')

useAuthStore.mockReturnValue({ status: 'checking' })

describe('Testing on useCheckAuth', () => {
  test('should call checkingAuthentication once', () => {
    renderHook(() => useCheckAuth())

    expect(mockCheckingAuthentication).toHaveBeenCalled()
  })

  test('should return the correct status', () => {
    const expectedStatus = 'checking'
    const { result } = renderHook(() => useCheckAuth())

    expect(result.current.status).toBe(expectedStatus)
  })
})
