import { STATUSDELIVERY } from '../../src/helpers'

describe('Testing on "statusDelivery.js"', () => {
  test('should return expected status delivery', () => {
    const statusDeliveryExpect = {
      COMPLETE: 'COMPLETE',
      PROGRESS: 'PROGRESS'
    }

    expect(STATUSDELIVERY).toEqual(statusDeliveryExpect)
  })
})
