import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchProductById } from '../services/operations/productAPI';
import { STATE_CHOICES } from '../data/dummyData';

export default function Checkout() {
    const location = useLocation();
    const { productId, bycart } = location.state || {};
    const [allId, setAllId] = useState([]);
    const { cart } = useSelector((state) => state.cart);
    const [totalPrice, setTotalPrice] = useState(0);
    const [formData, setFormData] = useState({
        country: "India",
        firstName: "",
        lastName: "",
        address: "",
        apartment: "",
        city: "",
        state: "",
        pinCode: "",
        phoneNumber: "",
    });

    useEffect(() => {
        let newTotalPrice = 0;
        if (bycart) {
            const ids = cart.map((data) => {
                newTotalPrice += data.price;
                return data._id;
            });
            setAllId(ids);
        } else {
            // Fetch product details by ID
            // const fetchProduct = async () => {
            //     const response = await fetchProductById(productId);
            //     setAllId([response._id]);
            //     newTotalPrice = response.price;
            // };
            // fetchProduct();
        }
        setTotalPrice(newTotalPrice);
    }, [bycart, cart, productId]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="container mx-auto md:mt-[12%] p-4">
            <form className="space-y-4">
                <label htmlFor="country" className="block">
                    Country/Region
                    <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="block w-full border border-gray-300 rounded-md p-2"
                    >
                        <option value="">Select option</option>
                        <option value="India">India</option>
                    </select>
                </label>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label htmlFor="firstName" className="block">
                        <input
                            placeholder="First Name (optional)"
                            value={formData.firstName}
                            name="firstName"
                            type="text"
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </label>
                    <label htmlFor="lastName" className="block">
                        <input
                            placeholder="Last Name"
                            value={formData.lastName}
                            name="lastName"
                            type="text"
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </label>
                </div>

                <label htmlFor="address" className="block">
                    <input
                        placeholder="Address"
                        value={formData.address}
                        name="address"
                        type="text"
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </label>
                <label htmlFor="apartment" className="block">
                    <input
                        placeholder="Apartment"
                        value={formData.apartment}
                        name="apartment"
                        type="text"
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </label>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <label htmlFor="city" className="block">
                        <input
                            placeholder="City"
                            value={formData.city}
                            name="city"
                            type="text"
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </label>

                    <label htmlFor="state" className="block">
                        
                        <select
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            className="block w-full border border-gray-300 rounded-md p-2"
                        >
                            <option value="">Select State</option>
                            {STATE_CHOICES.map((data) => (
                                <option key={data[0]} value={data[0]}>
                                    {data[1]}
                                </option>
                            ))}
                        </select>
                    </label>

                    <label htmlFor="pinCode" className="block">
                        <input
                            placeholder="Pin Code"
                            value={formData.pinCode}
                            name="pinCode"
                            type="number"
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </label>
                </div>

                <label htmlFor="phoneNumber" className="block">
                    <input
                        placeholder="Phone Number"
                        value={formData.phoneNumber}
                        name="phoneNumber"
                        type="number"
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </label>
            </form>

            <div>
                
            </div>
        </div>
    );
}
