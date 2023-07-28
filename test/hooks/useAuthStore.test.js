import { useSelector } from 'react-redux'
import { useAuthStore } from '../../src/hooks'

const mockAuthState = {
  status: 'authenticated',
  errorMessage: null,
  user: {
    id: 123,
    name: 'John Doe'
  }
}

jest.mock('react-redux', () => ({
  useSelector: jest.fn()
}))

describe('Testing on useAuthStore', () => {
  beforeEach(() => jest.clearAllMocks())

  test('should return the correct values when state has the expected structure', () => {
    useSelector.mockReturnValue(mockAuthState)

    const { status, errorMessage, user } = useAuthStore()

    expect(status).toBe('authenticated')
    expect(errorMessage).toBeNull()
    expect(user).toEqual({ id: 123, name: 'John Doe' })
  })

  test('should return default values or undefined when state does not have the expected structure', () => {
    useSelector.mockReturnValue({})

    const { status, errorMessage, user } = useAuthStore()

    expect(status).toBeUndefined()
    expect(errorMessage).toBeUndefined()
    expect(user).toBeUndefined()
  })
})
