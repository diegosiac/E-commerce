import { CATEGORIES } from '../../src/helpers'

describe('Testing on "categories.js"', () => {
  test('should return expected categories', () => {
    const categoriesExpect = {
      REPAIRS: 'REPAIRS',
      COMPONENTS: 'COMPONENTS',
      DEVICES: 'DEVICES'
    }

    expect(CATEGORIES).toEqual(categoriesExpect)
  })
})
