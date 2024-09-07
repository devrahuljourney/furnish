import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState  = {
    cart : localStorage.getItem('cart') ? JSON.parse(localStorage.getItem("cart")) : [],
    total : localStorage.getItem('total') ? JSON.parse(localStorage.getItem("total")) : 0,
    totalItems : localStorage.getItem("totalitems") ? JSON.parse(localStorage.getItem("totalItems")) : 0
}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers: {
        addToCart : (state,action) => {
            const items = action.payload;
            const index = state.cart.findIndex((data) => data._id === items._id);
            if(index < 0){
                state.cart.push(items);
                state.totalItems++;
                state.total += items.price;
                localStorage.setItem("cart", JSON.stringify(state.cart))
                localStorage.setItem("total", JSON.stringify(state.total))
                localStorage.setItem("totalItems", JSON.stringify(state.totalItems))
            }
        },
        removeFromCart : (state, action) => {
            const items = action.payload;
            const index = state.cart.findIndex((data) => data._id === items._id);
            if(index >=0 )
                {
                    state.totalItems--
                    state.total -= state.cart[index].price
                    state.cart.splice(index, 1)
        
                    localStorage.setItem("cart", JSON.stringify(state.cart))
                    localStorage.setItem("total", JSON.stringify(state.total))
                    localStorage.setItem("totalItems", JSON.stringify(state.totalItems))
                }
        },

        resetCart: (state) => {
            state.cart = []
            state.total = 0
            state.totalItems = 0
            
            localStorage.removeItem("cart")
            localStorage.removeItem("total")
            localStorage.removeItem("totalItems")
          },
    }
})

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions

export default cartSlice.reducer