import ecommerceApi from '../../api/ecommerceApi'
import { clearErrorMessage, onChecking, onLogin, onLogout } from './'
import { clearCart, updateBasket, updatePucharses } from '../cart/cartSlice'

const dataPucharses = [
  {
    id: '99283jf239oa8',
    value: 132,
    dateShop: '2023, 5, 15',
    deliveryDay: {
      status: 'PROGRESS',
      date: '2023, 5, 30'
    },
    shippingAddress: {
      name: 'Diego',
      lastName: 'Cruz Vázquez',
      firtsLine: 'Calle 4 MZ 31 lt 26',
      phoneNumber: '56430',
      country: 'MEXICO',
      zip: '56430',
      state: 'MEXICO',
      city: 'LOS REYES ACAQUILPAN (LA PAZ)',
      cologne: 'VALLE DE LOS REYES'
    },
    products: [
      {
        id: '23f32f23h32h23',
        thumbnail: 'https://m.media-amazon.com/images/I/51JY0jJhPAL._SY90_.jpg',
        title: 'Harina Organicaa',
        value: 132,
        amount: 1
      }
    ]
  },
  {
    id: 'h8293f09h',
    value: 234,
    dateShop: '2023,5,19',
    deliveryDay: {
      status: 'COMPLETE',
      date: '2023,5,22'
    },
    shippingAddress: {
      name: 'Diego',
      lastName: 'Cruz Vázquez',
      firtsLine: 'Calle 4 MZ 31 lt 26',
      phoneNumber: '56430',
      country: 'MEXICO',
      zip: '56430',
      state: 'MEXICO',
      city: 'LOS REYES ACAQUILPAN (LA PAZ)',
      cologne: 'VALLE DE LOS REYES'
    },
    products: [
      {
        id: 'h42j5jj353j5',
        thumbnail: 'https://m.media-amazon.com/images/I/51JY0jJhPAL._SY90_.jpg',
        title: 'Harina Organicaa',
        value: 152,
        amount: 1
      },
      {
        id: '3s3bs33b4h2246',
        thumbnail: 'https://m.media-amazon.com/images/I/51JY0jJhPAL._SY90_.jpg',
        title: 'Organicaa',
        value: 132,
        amount: 2
      }
    ]
  }
]

export const checkingAuthentication = () => {
  return async (dispatch) => {
    const token = localStorage.getItem('token')
    if (!token) return dispatch(onLogout())

    try {
      const { data } = await ecommerceApi.get('auth/renew')
      const { token, name, email, basket } = data.user

      localStorage.setItem('token', token)
      dispatch(updateBasket(basket))
      dispatch(updatePucharses(dataPucharses))
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
      const { token, name, email, basket } = data.user

      localStorage.setItem('token', token)
      dispatch(updateBasket(basket))
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
      const { token, name, email, basket } = data.user

      localStorage.setItem('token', token)
      dispatch(updateBasket(basket))
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
