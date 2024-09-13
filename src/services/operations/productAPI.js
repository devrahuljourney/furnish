import { apiconnector } from "../apiconnector";
import { productEndpoint } from "../apis";
import toast from "react-hot-toast";


const { GET_PRODUCT_BY_ID, CREATE_PRODUCT, DELETE_PRODUCT_BY_ID, GET_ALL_PRODUCT } = productEndpoint;

// 1. Fetch product by ID
export const fetchProductById = async (id) => {
    let result = null;
    const toastId = toast.loading("Loading...");
    try {
        const response = await apiconnector("GET", GET_PRODUCT_BY_ID(id));
        console.log("GET PRODUCT BY ID RESPONSE: ", response);
        
        if (!response?.data?.success) {
            throw new Error("Product not found");
        }

        toast.success("Product fetched successfully");
        result = response.data.product;
        return result;
    } catch (error) {
        console.log("FETCH PRODUCT BY ID ERROR: ", error);
        toast.error("Failed to fetch product");
        return null;
    } finally {
        toast.dismiss(toastId);
    }
};

// 2. Create a new product
export const createProduct = async (productData, token) => {
    let result = null;
    const toastId = toast.loading("Creating product...");
    try {
        const response = await apiconnector("POST", CREATE_PRODUCT, productData, {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        });
        
        console.log("CREATE PRODUCT RESPONSE: ", response);

        if (!response?.data?.success) {
            throw new Error("Failed to create product");
        }

        toast.success("Product created successfully");
        result = response.data.product;
        return result;
    } catch (error) {
        console.log("CREATE PRODUCT ERROR: ", error);
        toast.error("Failed to create product");
        return null;
    } finally {
        toast.dismiss(toastId);
    }
};

// 3. Delete product by ID
export const deleteProductById = async (id, token) => {
    const toastId = toast.loading("Deleting product...");
    try {
        const response = await apiconnector("DELETE", DELETE_PRODUCT_BY_ID(id), {}, {
            "Authorization": `Bearer ${token}`
        });
        
        console.log("DELETE PRODUCT RESPONSE: ", response);

        if (!response?.data?.success) {
            throw new Error("Failed to delete product");
        }

        toast.success("Product deleted successfully");
        return true;
    } catch (error) {
        console.log("DELETE PRODUCT ERROR: ", error);
        toast.error("Failed to delete product");
        return false;
    } finally {
        toast.dismiss(toastId);
    }
};

// 4. Fetch all products
export const fetchAllProducts = async () => {
    let result = null;
    const toastId = toast.loading("Loading products...");
    try {
        const response = await apiconnector("GET", GET_ALL_PRODUCT);
        console.log("GET ALL PRODUCTS RESPONSE: ", response);
        
        if (!response?.data?.success) {
            throw new Error("Failed to fetch products");
        }

        toast.success("Products fetched successfully");
        result = response.data.products;
        return result;
    } catch (error) {
        console.log("FETCH ALL PRODUCTS ERROR: ", error);
        toast.error("Failed to fetch products");
        return null;
    } finally {
        toast.dismiss(toastId);
    }
};
