import { getDayTranform } from '../../src/helpers'

describe('Testing on "getDayTranform.js"', () => {
  test('should format date correctly in Spanish', () => {
    const date = 'Wed Jul 10 2023'
    const expectedFormattedDate = '10 de julio del 2023'

    const result = getDayTranform(date)

    expect(result).toBe(expectedFormattedDate)
  })

  test('should format different dates correctly', () => {
    const date1 = 'Fri Sep 01 2023'
    const expectedFormattedDate1 = '1 de septiembre del 2023'
    const date2 = 'Wed Dec 25 2024'
    const expectedFormattedDate2 = '25 de diciembre del 2024'

    const result1 = getDayTranform(date1)
    const result2 = getDayTranform(date2)

    expect(result1).toBe(expectedFormattedDate1)
    expect(result2).toBe(expectedFormattedDate2)
  })
})
