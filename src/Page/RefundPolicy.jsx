import React from 'react';

const RefundPolicy = () => {
    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md md:mt-[13%] mt-[50%] ">
            <h1 className="text-3xl font-bold mb-4 text-center">Refund Policy</h1>

            <h2 className="text-2xl font-semibold mb-2">Returns</h2>
            <p className="text-gray-700 mb-4">
                At <strong>Ranbanka Furniture</strong>, we want you to be completely satisfied with your purchase. You may return most new, unopened items within <strong>7 days</strong> of delivery for a full refund.
            </p>
            <p className="text-gray-700 mb-4">
                To ensure a smooth return process, we ask that you please make a video while unboxing the product. This helps us address any issues more effectively. We'll also cover the return shipping costs if the return is due to our error (e.g., you received a different or defective item).
            </p>
            <p className="text-gray-700 mb-4">
                Please ensure that items are packed as you received them to facilitate the return process.
            </p>

            <h2 className="text-2xl font-semibold mb-2">Warranty</h2>
            <p className="text-gray-700 mb-4">
                <strong>Ranbanka Furniture</strong> provides a <strong>5-year termite warranty</strong> and a <strong>2-year manufacturing warranty</strong> on defects such as joint openings. 
            </p>

            <h2 className="text-2xl font-semibold mb-2">Replacement</h2>
            <p className="text-gray-700 mb-4">
                You should expect to receive your refund within <strong>four weeks</strong> of handing your package to the return shipper. However, in many cases, you will receive a refund more quickly. This time frame includes:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Transit time for us to receive your return from the shipper (5 to 10 business days).</li>
                <li>Time it takes us to process your return once we receive it (3 to 5 business days).</li>
                <li>Time it takes your bank to process our refund request (5 to 10 business days).</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-2">How to Return an Item</h2>
<p className="text-gray-700 mb-4">
    If you need to return an item, please fill out the <strong>Contact Us</strong> form on our website. 
    Provide your order details and mention that you would like to initiate a return. 
    Once we receive your request, we will guide you through the return process and notify you via email regarding your refund once we have processed the returned item.
</p>


            <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
            <p className="text-gray-700 mb-4">
                If you have any questions regarding our Refund Policy, please contact us at:
            </p>
            <p className="text-gray-700 mb-4">
                Email: <a href="mailto:info@ranbankafurniture.com" className="text-blue-500">info@ranbankafurniture.com</a>
            </p>
            <p className="text-gray-700">
                Phone: <a href="tel:+1234567890" className="text-blue-500">+1 (234) 567-890</a>
            </p>
        </div>
    );
};

export default RefundPolicy;
