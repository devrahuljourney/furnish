import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    signUpData : null,
  profileData: null,
  loading: false,
  token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setProfileData(state, value) {
      state.signupData = value.payload;
    },
    setLoading(state, value) {
      state.loading = value.payload;
    },
    setToken(state, value) {
      state.token = value.payload;
    },
    setSignUpData(state, action) {
        state.signUpData = action.payload
    }
  },
});

export const { setProfileData, setLoading, setToken, setSignUpData } = authSlice.actions;

export default authSlice.reducer;