import toast from "react-hot-toast";
import { searchEndpoints } from "../apis";
import { apiconnector } from "../apiconnector";

const {SEARCH_ALL_PRODUCT} = searchEndpoints;


export const searchAllProduct = async ( q) => {
    try {
        const response = await apiconnector("GET", SEARCH_ALL_PRODUCT(q) );
        const data = response.data;
        console.log("FETCH DATA FROM SEARCH ALL PRODUCT API ", data);
        if (!response?.data?.success) {
            throw new Error("Product not found");
        }

        // toast.success("Search fetched successfully");
        return {
            categories: data.searchCategories,
            subcategories: data.searchSubcategories,
            products: data.searchProducts
        };
    } catch (error) {
        console.log("GET ALL SEARCH API ERROR:", error);
        toast.error(error.response?.data?.message || "Failed to fetch subcategories");
        return null;
    }
}