import { configureStore } from "@reduxjs/toolkit";
import cart from "../features/Cart/cartSlice";

export const store = configureStore({
    reducer :{
        cart : cart
    }
})