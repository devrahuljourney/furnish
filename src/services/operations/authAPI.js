import toast from "react-hot-toast";
import { authEndpoints } from "../apis";
import { setLoading, setProfileData, setSignUpData, setToken } from "../../slices/authSlice";
import { apiconnector } from "../apiconnector";
import { resetCart } from "../../slices/cartSlice";

const { SIGNUP, LOGIN } = authEndpoints;

export const signUpApi = (data) => {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));
        try {
            const response = await apiconnector("POST", SIGNUP, data);
            if (!response.data.success) {
                throw new Error("SIGNUP API ERROR");
            }

            dispatch(setSignUpData(data));
            toast.success("Registered successfully");
            return response.data;
        } catch (error) {
            toast.error("Registration failed. Please try again.");
            console.error(error); 
        } finally {
            dispatch(setLoading(false));
            toast.remove(toastId); 
        }
    }
}

export const loginApi = (data) => {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));
        try {
            const response = await apiconnector("POST", LOGIN, data);
            if (!response.data.success) {
                throw new Error("LOGIN API ERROR");
            }

            dispatch(setProfileData(response.data.existingUser)); 
            dispatch(setToken(response.data.token));
            localStorage.setItem("token", response.data.token);


            toast.success("Logged in successfully");
            return response.data;
        } catch (error) {
            toast.error("Login failed. Please check your credentials and try again.");
            console.error(error); 
        } finally {
            dispatch(setLoading(false));
            toast.remove(toastId); 
        }
    }
}

export function logout(navigate) {
    return (dispatch) => {
      dispatch(setToken(null))
      dispatch(setProfileData(null))
      dispatch(resetCart())
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      toast.success("Logged Out")
      navigate("/")
    }
  }