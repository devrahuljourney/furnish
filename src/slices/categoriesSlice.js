import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoriesData: localStorage.getItem("categoriesData")
        ? JSON.parse(localStorage.getItem("categoriesData"))
        : [],
        loading : false
};

const categoriesSlice = createSlice({
    name: "categories",
    initialState: initialState,
    reducers: {
        setCategoriesData: (state, action) => {
            state.categoriesData = action.payload; 
            localStorage.setItem("categoriesData", JSON.stringify(action.payload)); 
        },
        setLoading : (state, action) => {
            state.loading = action.payload
        }
    },
});

export const { setCategoriesData, setLoading } = categoriesSlice.actions;
export default categoriesSlice.reducer;
