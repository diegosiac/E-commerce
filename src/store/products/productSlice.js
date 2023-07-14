import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: null,
    query: ''
  },
  reducers: {
    setProducts: (state, { payload }) => {
      state.products = payload
    },
    clearAllProducts: (state) => {
      state.products = null
    },
    setQuerySearch: (state, { payload }) => {
      state.query = payload
    },
    clearSearch: (state) => {
      state.query = ''
    }
  }
})

export const { setProducts, clearAllProducts, clearSearch, setQuerySearch } = productSlice.actions
