import { useLocation } from 'react-router-dom'
import { useQuery } from '../../src/hooks'
import { renderHook } from '@testing-library/react'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn()
}))

describe('Testing on useQuery', () => {
  test('should call useLocation', () => {
    useLocation.mockReturnValueOnce({ search: '?param1=value1&param2=value2' })
    renderHook(() => useQuery())

    expect(useLocation).toHaveBeenCalled()
  })

  test('should return the expected URLSearchParams object', () => {
    useLocation.mockReturnValueOnce({ search: '?param1=value1&param2=value2' })
    const { result } = renderHook(() => useQuery())

    expect(result.current.get('param1')).toBe('value1')
    expect(result.current.get('param2')).toBe('value2')
  })

  test('should return an empty URLSearchParams object when there is no search', () => {
    useLocation.mockReturnValueOnce({ search: '' })
    const { result } = renderHook(() => useQuery())

    expect(result.current.toString()).toBe('')
  })

  test('should return an empty URLSearchParams object when search is not provided', () => {
    useLocation.mockReturnValueOnce({})
    const { result } = renderHook(() => useQuery())

    expect(result.current.toString()).toBe('')
  })
})
