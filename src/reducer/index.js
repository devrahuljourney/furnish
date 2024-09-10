import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "../slices/cartSlice";
import categoriesSlice from "../slices/categoriesSlice";

const rootReducer = combineReducers({
    cart : cartSlice,
    category : categoriesSlice
})

export default rootReducer;