import { COUNTRIES } from '../../src/helpers'

describe('Testing on "countriesAccept.js"', () => {
  test('should return expected countriesAccept', () => {
    const countriesAcceptExpect = [
      { label: 'Mexico' }
    ]

    expect(COUNTRIES).toEqual(countriesAcceptExpect)
  })
})
