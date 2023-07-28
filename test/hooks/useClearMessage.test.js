import { renderHook } from '@testing-library/react'
import { useClearMessage } from '../../src/hooks'

const mockClearMessage = jest.fn()

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => (fn) => fn()
}))

jest.mock('../../src/store/auth/thunks', () => ({
  clearMessage: () => mockClearMessage
}))

describe('Testing on useClearMessage', () => {
  test('should call clearMessage when unmounting', () => {
    const { unmount } = renderHook(() => useClearMessage())

    unmount()

    expect(mockClearMessage).toHaveBeenCalled()
  })
})
