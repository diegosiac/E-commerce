import { cartSlice, changeStatusItem, clearCart, clearStatusItem, setErrorMessage, updateBasket, updatePucharses } from '../../../src/store/cart/cartSlice'
import { checkingIdState, completeState, errorMessageState, initialState } from '../../fixtures/cartFixtures'
import { STATUS } from '../../../src/store/cart/options'

describe('Testing on cartSlice', () => {
  test('should return the initial state and be called "cart"', () => {
    const state = cartSlice.reducer(initialState, {})

    expect(state).toEqual(initialState)
    expect(cartSlice.name).toBe('cart')
  })

  test('You must update the cart', () => {
    const state = cartSlice.reducer(initialState, updateBasket(completeState.basket))

    expect(state.basket).toEqual(completeState.basket)
  })

  test('You must update the purchases', () => {
    const state = cartSlice.reducer(initialState, updatePucharses(completeState.pucharses))

    expect(state.pucharses).toEqual(completeState.pucharses)
  })

  test('You must make the change the status of the item and the status', () => {
    const idCheking = 'a3928hf029923fg'

    const state = cartSlice.reducer(initialState, changeStatusItem(idCheking))

    expect(state.status).toEqual(STATUS.CHECKING)
    expect(state.idCheking).toEqual(idCheking)
  })

  test('you should change the errorMessage', () => {
    const errorMessage = 'This error message'

    const state = cartSlice.reducer(initialState, setErrorMessage(errorMessage))

    expect(state.messageError).toEqual(errorMessage)
  })

  test('you should clean up the states and the errorMessage', () => {
    const state = cartSlice.reducer(errorMessageState, clearStatusItem())

    expect(state.status).toEqual(STATUS.NONE)
    expect(state.idCheking).toBeNull()
    expect(state.messageError).toBeNull()
  })

  test('must clean and return to the initial state', () => {
    const state = cartSlice.reducer(checkingIdState, clearCart())

    expect(state.basket).toEqual([])
    expect(state.pucharses).toEqual([])
    expect(state.status).toEqual(STATUS.NONE)
    expect(state.idCheking).toBeNull()
  })
})
