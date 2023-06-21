import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    basket: []
  },
  reducers: {
    updateBasket: (state, { payload }) => {
      state.basket = payload
    }
  }
})

export const { updateBasket } = cartSlice.actions
