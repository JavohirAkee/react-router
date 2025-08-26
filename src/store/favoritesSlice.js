import { createSlice } from '@reduxjs/toolkit'

// Favorites state stores full product objects for easy rendering on the Favorite page
// Product shape: { id, name, price, image, description }
const initialState = {
  items: []
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite(state, action) {
      const product = action.payload
      const exists = state.items.find(item => item.id === product.id)
      if (exists) {
        state.items = state.items.filter(item => item.id !== product.id)
      } else {
        state.items.push(product)
      }
    },
    clearFavorites(state) {
      state.items = []
    }
  }
})

export const { toggleFavorite, clearFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer








