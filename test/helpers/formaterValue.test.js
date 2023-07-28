import { formaterValue } from '../../src/helpers'

describe('Testing on "formaterValue.js"', () => {
  test('should format the value correctly', () => {
    const value = 12345.67
    const formattedValue = formaterValue(value)

    expect(formattedValue).toBe('$12,345.67')
  })

  test('should format negative value correctly', () => {
    const value = -9876.54
    const formattedValue = formaterValue(value)

    expect(formattedValue).toBe('-$9,876.54')
  })
})
