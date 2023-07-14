import { ecommerceApi } from '../../api'
import { clearErrorMessage, onChecking, onLogin, onLogout } from './'
import { clearCart, updateBasket, updatePucharses } from '../cart/cartSlice'

export const checkingAuthentication = () => {
  return async (dispatch) => {
    const token = localStorage.getItem('token')
    if (!token) return dispatch(onLogout())

    try {
      const { data } = await ecommerceApi.get('auth/renew')
      const { token, name, email, basket, pucharses } = data.user

      localStorage.setItem('token', token)
      dispatch(updateBasket(basket.products))
      dispatch(updatePucharses(pucharses))
      dispatch(onLogin({ name, email }))
    } catch (error) {
      localStorage.clear()
      dispatch(onLogout())
      dispatch(clearCart())
    }
  }
}

export const startRegister = (userData) => {
  return async (dispatch) => {
    dispatch(onChecking())

    try {
      const { data } = await ecommerceApi.post('auth/new', userData)
      const { token, name, email, basket, pucharses } = data.user

      localStorage.setItem('token', token)
      dispatch(updateBasket(basket.products))
      dispatch(updatePucharses(pucharses))
      dispatch(onLogin({ name, email }))
    } catch (error) {
      const typeError = error.response.data.msg
      if (typeError) {
        dispatch(onLogout(typeError))
      } else {
        const errors = Object.values(error.response.data.errors).map(item => item.msg)[0]
        dispatch(onLogout(errors))
      }

      setTimeout(() => {
        dispatch(clearErrorMessage())
      }, 3000)
    }
  }
}

export const startLogin = (userData) => {
  return async (dispatch) => {
    dispatch(onChecking())

    try {
      const { data } = await ecommerceApi.post('auth', userData)
      const { token, name, email, basket, pucharses } = data.user

      localStorage.setItem('token', token)
      dispatch(updateBasket(basket.products))
      dispatch(updatePucharses(pucharses))
      dispatch(onLogin({ name, email }))
    } catch (error) {
      dispatch(onLogout('El correo o la contraseña son incorrectas'))
      setTimeout(() => {
        dispatch(clearErrorMessage())
      }, 3000)
    }
  }
}

export const startLogout = () => {
  return (dispatch) => {
    localStorage.clear()
    dispatch(onLogout())
    dispatch(clearCart())
  }
}

export const clearMessage = () => {
  return (dispatch) => {
    dispatch(clearErrorMessage())
  }
}
