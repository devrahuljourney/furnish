import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { contactUsApi } from '../services/operations/contactUs';

const ContactUsForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form fields
        if (!formData.name || !formData.email || !formData.message) {
            toast.error("All fields are required");
            return;
        }
        
        await contactUsApi(formData);
    };

    return (
        <div className="max-w-lg md:mt-[10%] mt-[30%] mx-auto p-8 bg-gray-50 shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        placeholder="Enter your name"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        placeholder="Enter your message"
                        rows="5"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactUsForm;
