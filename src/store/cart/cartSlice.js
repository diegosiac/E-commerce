import { createSlice } from '@reduxjs/toolkit'
import { STATUS } from './options'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    basket: [],
    pucharses: [],
    status: STATUS.NONE,
    idCheking: null,
    messageError: null
  },
  reducers: {
    updateBasket: (state, { payload }) => {
      state.basket = payload
    },
    updatePucharses: (state, { payload }) => {
      state.pucharses = payload
    },
    changeStatusItem: (state, { payload }) => {
      state.status = STATUS.CHECKING
      state.idCheking = payload
    },
    setErrorMessage: (state, { payload }) => {
      state.messageError = payload
    },
    clearStatusItem: (state) => {
      state.status = STATUS.NONE
      state.idCheking = null
      state.messageError = null
    },
    clearCart: (state) => {
      state.basket = []
      state.pucharses = []
      state.status = STATUS.NONE
      state.idCheking = null
    }
  }
})

export const { updateBasket, updatePucharses, changeStatusItem, clearStatusItem, clearCart, setErrorMessage } = cartSlice.actions
