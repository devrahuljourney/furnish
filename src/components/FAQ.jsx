import React, { useState } from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "How do I get more information about an item before I place my order?",
      answer: `If you have any questions about a product, please feel reach out to our experts at 70231-68022. Alternatively, you can also engage in a conversation with the chatbot located at the bottom right corner of the Rajwada page.`,
    },
    {
      question: "How do I place an order on Rajwada Furnish?",
      answer: (
        <>
          Follow these easy steps to complete your purchase on Rajwada Furnish:
          <ol className="list-decimal ml-6">
            <li>Select your desired item and click "Buy Now."</li>
            <li>Review your order on the "Order Summary Page."</li>
            <li>Apply any available coupons in the "Have a Coupon" box.</li>
            <li>Click "Proceed" to continue.</li>
            <li>For registered users: Log in using your mobile number or email address.</li>
            <li>Verify your identity with a one-time password (OTP).</li>
            <li>Confirm your shipping address and select "Proceed to pay."</li>
            <li>Choose your preferred payment method from the available options.</li>
            <li>Click "Proceed to Pay Securely" to complete your transaction.</li>
          </ol>
          Once your order is confirmed, you'll receive:
          <ul className="list-disc ml-6">
            <li>A confirmation email</li>
            <li>Your unique Order Number</li>
          </ul>
          That's it! Your Rajwada Furnish order is now placed and on its way to you.
        </>
      ),
    },
    {
      question: "Can you deliver my item faster than Standard Delivery time?",
      answer: `Standard Delivery: 10-12 days. We strive to process and ship your order as quickly as possible. Our team works diligently to ensure you receive your items in a timely manner. For faster Delivery than Standard Delivery, please feel free reach out to our experts at 70231-68022.`,
    },
    {
      question: "Can I customize an item?",
      answer: `Yes, we offer customization for specific products to suit your unique needs. Contact our experts for more information on which items can be customized and to discuss your specific requirements.`,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-[800px] mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-2">
            <button
              onClick={() => toggleFAQ(index)}
              className="text-left w-full text-lg font-semibold focus:outline-none flex justify-between items-center"
            >
              {faq.question}
              <span>{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="mt-2 text-gray-600">
                {typeof faq.answer === 'string' ? faq.answer : faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
