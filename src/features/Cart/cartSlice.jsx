import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        cartItems : [{
            cartId : Number,
            productID : Number,
            productName : String,
            color : String,
            size : String,
            price : Number,
            quantity : Number
        }]

    },
    reducers : {
        ADD_TO_CART : (state, action)=>{
            state.cartItems.push(action.payload)
        },
        REMOVE_TO_CART : (state,action) => {
            state.cartItems.filter((items)=>!items.cartId==action.payload)
        }

    }
});

export const { ADD_TO_CART, REMOVE_TO_CART} = cartSlice.actions;
export default cartSlice.reducer;