import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [], // {id, name, price, quantity, image, description}
    totalPrice: 0,
    totalQuantity: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const product = action.payload
            const existing = state.items.find(item => item.id === product.id)

            if (existing) {
                existing.quantity += 1
            } else {
                state.items.push({ ...product, quantity: 1 })
            }

            state.totalPrice += product.price
            state.totalQuantity += 1
        },

        removeFromCart(state, action) {
            const id = action.payload
            const existing = state.items.find(item => item.id === id)

            if (existing) {
                state.totalPrice -= existing.price * existing.quantity
                state.totalQuantity -= existing.quantity
                state.items = state.items.filter(item => item.id !== id)
            }
        },

        increaseQuantity(state, action) {
            const id = action.payload
            const existing = state.items.find(item => item.id === id)
            if (existing) {
                existing.quantity += 1
                state.totalPrice += existing.price
                state.totalQuantity += 1
            }
        },

        decreaseQuantity(state, action) {
            const id = action.payload
            const existing = state.items.find(item => item.id === id)
            if (existing && existing.quantity > 1) {
                existing.quantity -= 1
                state.totalPrice -= existing.price
                state.totalQuantity -= 1
            }
        },

        clearCart(state) {
            state.items = []
            state.totalPrice = 0
            state.totalQuantity = 0
        }
    }
})

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer
