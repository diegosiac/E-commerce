import { STATUS } from '../../../src/store/cart/options'

describe('Testing on "options.js"', () => {
  test('should return expected options', () => {
    const optionExpect = {
      CHECKING: 'checking',
      NONE: null
    }

    expect(STATUS).toEqual(optionExpect)
  })
})
