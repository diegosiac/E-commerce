import { ecommerceApi } from '../../../src/api'
import { checkingAuthentication, clearErrorMessage, clearMessage, onChecking, onLogin, onLogout, startLogin, startLogout, startRegister } from '../../../src/store/auth'
import { clearCart, updateBasket, updatePucharses } from '../../../src/store/cart/cartSlice'
import { basketFixtures } from '../../fixtures/basketFixtures'

const response = {
  data: {
    user: {
      token: '923hf0239fh23908hf29308hf02398h',
      name: 'user etst',
      email: 'demotest@test.com',
      basket: {
        products: basketFixtures
      },
      pucharses: [{ id: '123' }, { id: '234' }, { id: '523' }]
    }
  }
}

jest.mock('../../../src/api/ecommerceApi')

jest.useFakeTimers()

describe('Testing on thunks auth', () => {
  const dispatch = jest.fn()

  beforeEach(() => jest.clearAllMocks())

  test('checking Authentication should call Logout if the token property does not exist in the localStorage - Error', async () => {
    const localStorageMock = {
      getItem: jest.fn(() => false),
      setItem: jest.fn(),
      clear: jest.fn()
    }

    Object.defineProperty(global, 'localStorage', { writable: true, value: localStorageMock })

    await checkingAuthentication()(dispatch)

    expect(localStorageMock.getItem).toHaveBeenCalledWith('token')
    expect(dispatch).toHaveBeenCalledWith(onLogout())
  })

  test('checking Authentication should call updateBasket, updatePucharses, onLogin and save the token in localStorage - Success', async () => {
    const { token, name, email, basket, pucharses } = response.data.user

    const localStorageMock = {
      getItem: jest.fn(() => token),
      setItem: jest.fn(),
      clear: jest.fn()
    }

    Object.defineProperty(global, 'localStorage', { writable: true, value: localStorageMock })

    ecommerceApi.get.mockResolvedValue(response)

    await checkingAuthentication()(dispatch)

    expect(localStorageMock.setItem).toHaveBeenCalledWith('token', token)
    expect(dispatch).toHaveBeenCalledWith(updateBasket(basket.products))
    expect(dispatch).toHaveBeenCalledWith(updatePucharses(pucharses))
    expect(dispatch).toHaveBeenCalledWith(onLogin({ name, email }))
  })

  test('checkingAuthentication should call onLogout, clearCart and clear the localStorage - Error', async () => {
    const { token } = response.data.user

    const localStorageMock = {
      getItem: jest.fn(() => token),
      setItem: jest.fn(),
      clear: jest.fn()
    }

    Object.defineProperty(global, 'localStorage', { writable: true, value: localStorageMock })

    ecommerceApi.get.mockRejectedValue(new Error('Invalid token'))

    await checkingAuthentication()(dispatch)

    expect(localStorageMock.clear).toHaveBeenCalled()
    expect(dispatch).toHaveBeenCalledWith(onLogout())
    expect(dispatch).toHaveBeenCalledWith(clearCart())
  })

  test('star Register must call Checking, update Basket, onLogin and save the token in localStorage - Success', async () => {
    const { token, name, email, basket, pucharses } = response.data.user

    const localStorageMock = {
      getItem: jest.fn(() => token),
      setItem: jest.fn(),
      clear: jest.fn()
    }

    Object.defineProperty(global, 'localStorage', { writable: true, value: localStorageMock })

    ecommerceApi.post.mockResolvedValue(response)

    await startRegister()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(onChecking())
    expect(localStorageMock.setItem).toHaveBeenCalledWith('token', token)
    expect(dispatch).toHaveBeenCalledWith(updateBasket(basket.products))
    expect(dispatch).toHaveBeenCalledWith(updatePucharses(pucharses))
    expect(dispatch).toHaveBeenCalledWith(onLogin({ name, email }))
  })

  test('startRegister should call onChecking, onLogout, and clearErrorMessage with direct error - Error', async () => {
    const messageError = 'This error Message'

    ecommerceApi.post.mockRejectedValue({ response: { data: { msg: messageError } } })

    await startRegister()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(onChecking())
    expect(dispatch).toHaveBeenCalledWith(onLogout(messageError))
    expect(dispatch).not.toHaveBeenCalledWith(clearErrorMessage())
    jest.advanceTimersByTime(3000)
    expect(dispatch).toHaveBeenCalledWith(clearErrorMessage())
  })

  test('startRegister should call onChecking, onLogout, and clearErrorMessage with specific error - Error', async () => {
    const messageError = 'This error Message'

    ecommerceApi.post.mockRejectedValue({
      response: {
        data: {
          errors: [{ msg: messageError }, { msg: 'more error message' }]
        }
      }
    })

    await startRegister()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(onChecking())
    expect(dispatch).toHaveBeenCalledWith(onLogout(messageError))
    expect(dispatch).not.toHaveBeenCalledWith(clearErrorMessage())
    jest.advanceTimersByTime(3000)
    expect(dispatch).toHaveBeenCalledWith(clearErrorMessage())
  })

  test('star Login should call onChecking, updateBasket, updatePucharses, onLogin and save the token in localStorage - Success', async () => {
    const { token, name, email, basket, pucharses } = response.data.user

    const localStorageMock = {
      getItem: jest.fn(() => token),
      setItem: jest.fn(),
      clear: jest.fn()
    }

    Object.defineProperty(global, 'localStorage', { writable: true, value: localStorageMock })

    ecommerceApi.post.mockResolvedValue(response)

    await startLogin()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(onChecking())
    expect(localStorageMock.setItem).toHaveBeenCalledWith('token', token)
    expect(dispatch).toHaveBeenCalledWith(updateBasket(basket.products))
    expect(dispatch).toHaveBeenCalledWith(updatePucharses(pucharses))
    expect(dispatch).toHaveBeenCalledWith(onLogin({ name, email }))
  })

  test('startLogin should call onChecking, onLogout and clearErrorMessage - Error', async () => {
    ecommerceApi.post.mockRejectedValue(new Error('Invalid token'))

    await startLogin()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(onChecking())
    expect(dispatch).toHaveBeenCalledWith(onLogout('El correo o la contraseña son incorrectas'))
    expect(dispatch).not.toHaveBeenCalledWith(clearErrorMessage())
    jest.advanceTimersByTime(3000)
    expect(dispatch).toHaveBeenCalledWith(clearErrorMessage())
  })

  test('startLogout should call onLogout, clearCart and clear the localStorage', () => {
    const localStorageMock = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      clear: jest.fn()
    }

    Object.defineProperty(global, 'localStorage', { writable: true, value: localStorageMock })

    startLogout()(dispatch)

    expect(localStorageMock.clear).toHaveBeenCalled()
    expect(dispatch).toHaveBeenCalledWith(onLogout())
    expect(dispatch).toHaveBeenCalledWith(clearCart())
  })

  test('clearMessage should call clearErrorMessage', () => {
    clearMessage()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(clearErrorMessage())
  })
})
