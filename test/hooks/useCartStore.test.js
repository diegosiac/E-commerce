import { useSelector } from 'react-redux'
import { useCartStore } from '../../src/hooks'
import { STATUS } from '../../src/store/cart/options'
import { userFixtures } from '../fixtures/userFixtures'
import { basketFixtures } from '../fixtures/basketFixtures'

const mockCartState = {
  basket: basketFixtures,
  status: STATUS.NONE,
  idCheking: null,
  pucharses: userFixtures.pucharses,
  messageError: null
}

jest.mock('react-redux', () => ({
  useSelector: jest.fn()
}))

describe('Testing on useCartStore', () => {
  beforeEach(() => jest.clearAllMocks())

  test('should return the correct values when state has the expected structure', () => {
    useSelector.mockReturnValue(mockCartState)

    const { basket, status, idCheking, pucharses, messageError } = useCartStore()

    expect(basket).toEqual(basketFixtures)
    expect(status).toBe(STATUS.NONE)
    expect(idCheking).toBeNull()
    expect(messageError).toBeNull()
    expect(pucharses).toEqual(userFixtures.pucharses)
  })

  test('should return default values or undefined when state does not have the expected structure', () => {
    useSelector.mockReturnValue({})

    const { basket, status, idCheking, pucharses, messageError } = useCartStore()

    expect(basket).toBeUndefined()
    expect(status).toBeUndefined()
    expect(idCheking).toBeUndefined()
    expect(messageError).toBeUndefined()
    expect(pucharses).toBeUndefined()
  })
})
