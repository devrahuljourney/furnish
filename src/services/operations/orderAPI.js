import { createSlice } from "@reduxjs/toolkit";
import { apiconnector } from "../apiconnector";
import toast from "react-hot-toast";
import { orderEndpoints } from "../apis";
const { GET_ALL_ORDER } = orderEndpoints;



export const fetchAllOrders = async (token) => {
    let result = null;
    const toastId = toast.loading("Loading orders...");

    try {
        const response = await fetch(GET_ALL_ORDER, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            credentials: "include",  // This ensures cookies are sent with the request
        });

        // Parse the response as JSON
        const data = await response.json();

        // Log response for debugging
        console.log("GET ALL ORDER RESPONSE: ", data);

        if (!data?.success) {
            throw new Error("Failed to fetch orders");
        }

        toast.success("Orders fetched successfully");
        result = data.orders;
        return result;

    } catch (error) {
        console.error("FETCH ALL ORDER ERROR: ", error);
        toast.error("Failed to fetch orders");
        return null;

    } finally {
        toast.dismiss(toastId);
    }
};
