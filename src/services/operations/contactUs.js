import toast from "react-hot-toast";
import { apiconnector } from "../apiconnector";
import { contactUs } from "../apis";

const {CONTACT_US} = contactUs
export const contactUsApi = async (formData, token) => {
    let result = null;
    const toastId = toast.loading("Sending Mail...");
    try {
        const response = await apiconnector("POST", CONTACT_US, formData);
        

        if (!response?.data?.success) {
            throw new Error("Failed to send Mail");
        }

        toast.success("Mail Send successfully");
        result = response.data.product;
        return result;
    } catch (error) {
        toast.error("Failed to send mail");
        return null;
    } finally {
        toast.dismiss(toastId);
    }
};