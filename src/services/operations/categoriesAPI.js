import { createSlice } from "@reduxjs/toolkit";
import { apiconnector } from "../apiconnector";
import { categoriesEndpoints } from "../apis";
import toast from "react-hot-toast";
import { setCategoriesData, setLoading } from "../../slices/categoriesSlice";


const { GET_ALL_CATEGORY } = categoriesEndpoints;

export const fetchAllCategories = () => {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiconnector("GET", GET_ALL_CATEGORY);
      const data = response.data;
      console.log("GET ALL CATEGORY DATA API ", data);

      dispatch(setCategoriesData(data)); 
      

      toast.success("Categories fetched successfully!");
      return data;
    } catch (error) {
      console.log("GET ALL CATEGORY API ERROR:", error);
      toast.error("Failed to fetch categories.");
      return null;
    } finally {
      dispatch(setLoading(false));
      toast.dismiss(toastId);
    }
  };
};
