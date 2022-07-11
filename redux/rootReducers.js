import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import authSlice from "./features/auth";
import messageSlice from "./features/message";
import productSlice from "./features/productSlice";
import cartSlice from "./features/cartSlice";


const rootReducers = combineReducers({
    counter: counterSlice,
    auth: authSlice,
    mesaj: messageSlice,
    product: productSlice,
    cart: cartSlice,
});

export default rootReducers;