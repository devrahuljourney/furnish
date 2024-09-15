import { apiconnector } from "../apiconnector";
import { subcategoryEndpoints } from "../apis";
import toast from "react-hot-toast";

const { GET_ALL_SUBCATEGORY, GET_10_TOP_SUBCATEGORY , GET_SUBCATEGORY_BY_ID, CREATE_SUBCATEGORY, DELETE_SUBCATEGORY_BY_ID } = subcategoryEndpoints;


export const fetchAllSubcategories = async () => {
  let result = null;
  const toastId = toast.loading("Loading subcategories...");
  try {
    const response = await apiconnector("GET", GET_ALL_SUBCATEGORY);
    console.log("GET ALL SUBCATEGORY API RESPONSE", response);

    if (!response?.data?.success) {
      throw new Error("Could not fetch subcategories");
    }

    toast.success("Subcategories fetched successfully");
    result = response?.data?.subcategories;
    return result;
  } catch (error) {
    console.log("GET ALL SUBCATEGORY API ERROR:", error);
    toast.error(error.response?.data?.message || "Failed to fetch subcategories");
    return null;
  } finally {
    toast.dismiss(toastId);
  }
};

export const fetchtopSubcategories = async () => {
  let result = null;
  const toastId = toast.loading("Loading subcategories...");
  try {
    const response = await apiconnector("GET", GET_10_TOP_SUBCATEGORY );
    console.log("GET ALL SUBCATEGORY API RESPONSE", response);

    if (!response?.data?.success) {
      throw new Error("Could not fetch subcategories");
    }

    toast.success("Subcategories fetched successfully");
    result = response?.data?.data;
    return result;
  } catch (error) {
    console.log("GET ALL SUBCATEGORY API ERROR:", error);
    toast.error(error.response?.data?.message || "Failed to fetch subcategories");
    return null;
  } finally {
    toast.dismiss(toastId);
  }
};


export const fetchSubcategoryById = async (id) => {
  let result = null;
  const toastId = toast.loading("Loading subcategory...");
  try {
    const response = await apiconnector("GET", GET_SUBCATEGORY_BY_ID(id));
    console.log("GET SUBCATEGORY BY ID API RESPONSE", response);

    if (!response?.data?.success) {
      throw new Error("Could not fetch subcategory");
    }

    toast.success("Subcategory fetched successfully");
    result = response?.data?.subcategory;
    return result;
  } catch (error) {
    console.log("GET SUBCATEGORY BY ID API ERROR:", error);
    toast.error(error.response?.data?.message || "Failed to fetch subcategory");
    return null;
  } finally {
    toast.dismiss(toastId);
  }
};


export const createSubcategory = async (subcategoryData, token) => {
  let result = null;
  const toastId = toast.loading("Creating subcategory...");
  try {
    const response = await apiconnector("POST", CREATE_SUBCATEGORY, subcategoryData, {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    });

    console.log("CREATE SUBCATEGORY API RESPONSE", response);

    if (!response?.data?.success) {
      throw new Error("Could not create subcategory");
    }

    toast.success("Subcategory created successfully");
    result = response?.data?.subcategory;
    return result;
  } catch (error) {
    console.log("CREATE SUBCATEGORY API ERROR:", error);
    toast.error(error.response?.data?.message || "Failed to create subcategory");
    return null;
  } finally {
    toast.dismiss(toastId);
  }
};


export const deleteSubcategoryById = async (id, token) => {
  let result = null;
  const toastId = toast.loading("Deleting subcategory...");
  try {
    const response = await apiconnector("DELETE", DELETE_SUBCATEGORY_BY_ID(id), null, {
      "Authorization": `Bearer ${token}`,
    });

    console.log("DELETE SUBCATEGORY API RESPONSE", response);

    if (!response?.data?.success) {
      throw new Error("Could not delete subcategory");
    }

    toast.success("Subcategory deleted successfully");
    result = response?.data;
    return result;
  } catch (error) {
    console.log("DELETE SUBCATEGORY API ERROR:", error);
    toast.error(error.response?.data?.message || "Failed to delete subcategory");
    return null;
  } finally {
    toast.dismiss(toastId);
  }
};
