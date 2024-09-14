import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "../slices/cartSlice";
import categoriesSlice from "../slices/categoriesSlice";
import authSlice from "../slices/authSlice";

const rootReducer = combineReducers({
    cart : cartSlice,
    category : categoriesSlice,
    auth: authSlice
})

export default rootReducer;