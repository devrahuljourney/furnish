import React from 'react';
import useRazorpay from 'react-razorpay';

const PaymentComponent = () => {
  const [Razorpay] = useRazorpay();

  const handlePayment = async (params) => {
    try {
      const order = await createOrder(params); // Create order on your backend

      const options = {
        key: 'rzp_test_LW4ekpU1YFfVwC', // Replace with your Razorpay Key ID
        amount: '50000', // Amount in paise (50000 paise = 500 INR)
        currency: 'INR',
        name: 'Acme Corp',
        description: 'Test Transaction',
        image: 'https://example.com/your_logo',
        order_id: order.id, // Use the order ID from backend response
        handler: (response) => {
          alert(`Payment ID: ${response.razorpay_payment_id}`);
          alert(`Order ID: ${response.razorpay_order_id}`);
          alert(`Signature: ${response.razorpay_signature}`);
        },
        prefill: {
          name: 'Piyush Garg',
          email: 'youremail@example.com',
          contact: '9999999999',
        },
        notes: {
          address: 'Razorpay Corporate Office',
        },
        theme: {
          color: '#3399cc',
        },
      };

      const rzp1 = new Razorpay(options);

      rzp1.on('payment.failed', (response) => {
        alert(`Error Code: ${response.error.code}`);
        alert(`Error Description: ${response.error.description}`);
        alert(`Error Source: ${response.error.source}`);
        alert(`Error Step: ${response.error.step}`);
        alert(`Error Reason: ${response.error.reason}`);
        alert(`Order ID: ${response.error.metadata.order_id}`);
        alert(`Payment ID: ${response.error.metadata.payment_id}`);
      });

      rzp1.open();
    } catch (error) {
      console.error('Payment error:', error);
    }
  };

  const createOrder = async (params) => {
    // Dummy backend API call to create order
    // Replace this with your actual API call
    return {
      id: 'order_9A33XWu170gUtm', // Sample order ID from your backend
    };
  };

  return (
    <div>
      <h1>Razorpay Payment</h1>
      <button onClick={() => handlePayment({ amount: 50000 })}>
        Pay ₹500
      </button>
    </div>
  );
};

export default PaymentComponent;
