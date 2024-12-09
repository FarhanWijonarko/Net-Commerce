import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const newItems = action.payload 
            const selectCartIndex = state.items.findIndex(item =>item.id === newItems.id)
            if (selectCartIndex === -1) {
                state.items.push({
                    ...newItems,
                    quantity: 1,
                    totalPrice: newItems.price
                })
                
            }else {
                state.items[selectCartIndex].quantity += 1;
                state.items[selectCartIndex].totalPrice = state.items[selectCartIndex].quantity * newItems.price
            }
        },
         plusItem: (state, action) => {
             const {id, price} = action.payload
             const selectCartIndexPlus = state.items.findIndex(item =>item.id === id)
             state.items[selectCartIndexPlus].quantity += 1
             state.items[selectCartIndexPlus].totalPrice = state.items[selectCartIndexPlus].quantity * price
         },
         minusItem: (state, action) => {
            const {id, price} = action.payload
            const selectCartIndexMinus = state.items.findIndex(item =>item.id === id)
            if (selectCartIndexMinus >= 0) {
                state.items[selectCartIndexMinus].quantity -= 1
                state.items[selectCartIndexMinus].totalPrice = state.items[selectCartIndexMinus].quantity * price
                if (state.items[selectCartIndexMinus].quantity === 0) {
                    state.items.splice(selectCartIndexMinus, 1)
                }
            }else {
                console.log('ok')
            }
        },
    },
});
export default cartSlice.reducer

export const {addItemToCart, plusItem, minusItem} = cartSlice.actions

export const selectCartItems = (state) => state.cart.items
export const totalProductCart = (state) => state.cart.items.reduce((total, item) => total + item.quantity,0)
export const totalPriceCart = (state) => state.cart.items.reduce((total, item) => total + item.totalPrice,0)