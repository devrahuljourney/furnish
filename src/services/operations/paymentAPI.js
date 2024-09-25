import { toast } from "react-hot-toast";
import { apiconnector } from "../apiconnector";
import { paymentEndpoints } from "../apis";
import { setPaymentLoading } from "../../slices/authSlice";
import { resetCart } from "../../slices/cartSlice";

const { PAYMENT_ORDER, PAYMENT_VERIFY } = paymentEndpoints;

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export async function buy(token, product, totalPrice,formData, navigate, dispatch) {
  const toastId = toast.loading("Loading...");
  console.log("Token from buy api", token)

console.log("Total Price:", totalPrice);
console.log("Form Data:", formData);
  try {
    // Load the Razorpay script
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!res) {
      toast.error("RazorPay SDK failed to load");
      return;
    }

    // Initiate the order
    const orderResponse = await apiconnector(
      "POST",
      PAYMENT_ORDER,
       {totalPrice,formData},
      { Authorization: `Bearer ${token}` }
    );

    if (!orderResponse.data.success) {
      throw new Error(orderResponse.data.message);
    }

    console.log("Order Response:", orderResponse);

    // Payment options
    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY,
      currency: orderResponse.data.data.currency,
      amount: orderResponse.data.data.amount ,
      order_id: orderResponse.data.data.id,
      name: "Furniture Store",
      handler: function (response) {
        verifyPayment({ ...response, product, formData }, token, navigate, dispatch);
      },
    };

    // Create and open Razorpay payment object
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

    // Handle payment failure
    paymentObject.on("payment.failed", function (response) {
      toast.error("Oops, payment failed");
      console.log(response.error);
    });
  } catch (error) {
    console.log("Payment API ERROR:", error);
    toast.error(`Could not make payment: ${error.message}`);
  } finally {
    toast.dismiss(toastId);
  }
}

// Verify payment
async function verifyPayment(bodyData, token, navigate, dispatch) {
  const toastId = toast.loading("Verifying Payment...");
//   dispatch(setPaymentLoading(true));

  try {
    // Verify the payment with server
    const response = await apiconnector(
      "POST",
      PAYMENT_VERIFY,
      bodyData,
      { Authorization: `Bearer ${token}` }
    );

    // if (!response.data.success) {
    //   throw new Error(response.data.message);
    // }

    toast.success("Payment successful!");
    navigate("/profile");
    // dispatch(resetCart());
  } catch (error) {
    console.log("Payment Verify ERROR:", error);
    toast.error(`Could not verify payment: ${error.message}`);
  } finally {
    toast.dismiss(toastId);
    // dispatch(setPaymentLoading(false));
  }
}
