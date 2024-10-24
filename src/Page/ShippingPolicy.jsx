import Footer from "./Footer";

const ShippingPolicy = () => {
    return (
        <>
            <div className="container mx-auto p-6 mt-[50%] md:mt-[13%]" >
            <h1 className="text-3xl font-bold mb-4">Shipping Policy</h1>
            <p className="text-gray-700 mb-4">
                At Ranbank Furniture, we partner with trusted logistics companies, Bluedart and Delhivery, to ensure that your orders are delivered promptly across India.
            </p>
            <h2 className="text-2xl font-semibold mb-2">Shipping Timeline</h2>
            <p className="text-gray-700 mb-4">
                Your product will be shipped from our warehouse within <strong>7-10 days</strong> after placing your order. We are committed to processing and dispatching your items as quickly as possible.
            </p>
            <h2 className="text-2xl font-semibold mb-2">Shipping Rates</h2>
            <p className="text-gray-700 mb-4">
                Please note that the shipping rates for many items we sell are <strong>weight-based</strong>. You can find the weight of any such item on its detail page. To align with the policies of our shipping partners, all weights will be rounded up to the next full pound.
            </p>
            <p className="text-gray-700 mb-4">
                If you have any questions about our shipping policy, feel free to reach out to our customer service team.
            </p>
        </div>
        <Footer/>
        </>
    );
};

export default ShippingPolicy;
