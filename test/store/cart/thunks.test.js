import { ecommerceApi } from '../../../src/api'
import { changeStatusItem, clearStatusItem, setErrorMessage, updateBasket } from '../../../src/store/cart/cartSlice'
import { setBasket, setBasketProduct } from '../../../src/store/cart/thunks'
import { basketAllFixtures, basketFixtures } from '../../fixtures/basketFixtures'

const response = {
  data: {
    user: {
      products: basketFixtures
    }
  }
}

jest.mock('../../../src/api/ecommerceApi')

describe('Testing on thunks cart', () => {
  const dispatch = jest.fn()

  beforeEach(() => jest.clearAllMocks())

  test('setBasket should call changeStatusItem, updateBasket and clearStatusItem - Success', async () => {
    const expectId = '9289f2h398h239f'
    ecommerceApi.put.mockResolvedValue(response)

    await setBasket({ newBasket: basketAllFixtures, id: expectId })(dispatch)

    expect(dispatch).toHaveBeenCalledWith(changeStatusItem(expectId))
    expect(dispatch).toHaveBeenCalledWith(updateBasket(basketFixtures))
    expect(dispatch).toHaveBeenCalledWith(clearStatusItem())
  })

  test('setBasket must call setErrorMessage - Error', async () => {
    const expectId = '9289f2h398h239f'
    ecommerceApi.put.mockRejectedValue(new Error('Invalid token'))

    await setBasket({ newBasket: basketAllFixtures, id: expectId })(dispatch)

    expect(dispatch).toHaveBeenCalledWith(setErrorMessage('Hubo un error, inténtelo más tarde'))
  })

  test('setBasketProduct should call changeStatusItem, updateBasket and clearStatusItem - Success', async () => {
    ecommerceApi.put.mockResolvedValue(response)

    await setBasketProduct({ id: '28fh3827fg28' })(dispatch)

    expect(dispatch).toHaveBeenCalledWith(changeStatusItem(null))
    expect(dispatch).toHaveBeenCalledWith(updateBasket(basketFixtures))
    expect(dispatch).toHaveBeenCalledWith(clearStatusItem())
  })

  test('setBasketProduct must call setErrorMessage - Error', async () => {
    ecommerceApi.put.mockRejectedValue(new Error('Invalid token'))

    await setBasketProduct({ id: '283f20f7g203' })(dispatch)

    expect(dispatch).toHaveBeenCalledWith(setErrorMessage('Hubo un error, inténtelo más tarde'))
  })
})
