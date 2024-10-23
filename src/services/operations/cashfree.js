import axios from "axios";
import { load } from '@cashfreepayments/cashfree-js';
import { paymentEndpoints } from "../apis";
import { toast } from "react-hot-toast";  // Import from react-hot-toast

const { CASHFREE_PAYMENT_ORDER, CASHFREE_PAYMENT_VERIFY } = paymentEndpoints;
let cashfree;

export const initializeSDK = async () => {
    if (!cashfree) {
        cashfree = await load({ mode: "sandbox" }); 
        // cashfree = await load({ mode: "production" }); 

    }
};

export const getSessionId = async (token, allId, totalPrice, formData) => {
    let toastId;
    try {
        toastId = toast.loading("Creating payment session...");  // Show loading toast
        let res = await axios.post(CASHFREE_PAYMENT_ORDER, { token, allId, totalPrice, ...formData });
        console.log("Session response:", res.data);

        if (res.data && res.data.payment_session_id) {
            toast.success("Payment session created!", { id: toastId });  // Update toast on success
            return { sessionId: res.data.payment_session_id, orderId: res.data.order_id };
        } else {
            toast.error("Failed to create payment session.", { id: toastId });  // Update toast on error
            return null;
        }
    } catch (error) {
        console.error("Error fetching session ID:", error);
        toast.error("Error creating payment session.", { id: toastId });  // Update toast on exception
        return null;
    }
};

export const verifyPayment = async (orderId, token, product, totalPrice, formData, navigate) => {
    let toastId;
    try {
        toastId = toast.loading("Verifying payment...");
        let res = await axios.post(CASHFREE_PAYMENT_VERIFY(orderId), { token, product, totalPrice, formData });
        console.log("console res : ", res)
        
        if (res && res.data && res.data.paymentData.payment_status === "SUCCESS") {
            toast.success("Payment verified!", { id: toastId });
            navigate("/profile");
        } else {
            toast.error("Payment verification failed.", { id: toastId });
            throw new Error("Payment verification failed.");
        }

        if (!token) {
            toast("Login to see your order history");
            navigate("/auth");
        } else {
            navigate("/profile");
        }
    } catch (error) {
        console.error("Error verifying payment:", error);
        toast.error("Error verifying payment.", { id: toastId });
    }
    finally {
        toast.dismiss(toastId)
    }
};

export const startPayment = async (sessionId) => {
    let toastId;
    let checkoutOptions = {
        paymentSessionId: sessionId,
        redirectTarget: "_modal",
    };

    try {
        toastId = toast.loading("Processing payment...");
        await cashfree.checkout(checkoutOptions);
        toast.success("Payment process initiated", { id: toastId });
        console.log("Payment window opened successfully");
    } catch (error) {
        console.error("Error starting payment:", error);
        toast.error("Error starting payment.", { id: toastId });
        throw new Error("Payment initiation failed.");
    }
};
