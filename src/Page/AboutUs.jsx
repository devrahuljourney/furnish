import React from 'react';
import Footer from './Footer';

const AboutUs = () => {
    return (
        <>
            <div className="max-w-3xl md:mt-[13%] mt-[50%] mx-auto p-6 bg-white shadow-md rounded-md ">
            <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
            <p className="text-gray-700 mb-4">
                Welcome to <strong>Ranbanka Furniture!</strong>
            </p>
            <p className="text-gray-700 mb-4">
                 we embarked on a journey as Ranbanka Furniture, fueled by the vision of transforming homes into beautiful sanctuaries. We believe that furniture is not just an addition to a house; it's an essential aspect that reflects the personality and essence of those who inhabit it. From the style of the bed to the color of the chairs, every piece of furniture plays a pivotal role in defining your living space.
            </p>
            <p className="text-gray-700 mb-4">
                At Ranbanka Furniture, we understand that the act of choosing furniture is an expression of creativity and individuality. People love creating spaces that resonate with their personal style far more than merely purchasing items. We embrace the innate creativity within all of us, providing the tools to turn your home into a canvas where you can express your identity.
            </p>
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p className="text-gray-700 mb-4">
                Today, our mission goes beyond selling well-designed products; it’s about inspiring and empowering you to craft spaces that reflect who you are. We are passionate about helping you experience the joy of creation. We envision your home as a joyful, creative endeavor, where arranging your space becomes a fulfilling experience.
            </p>
            <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4">
                <li><strong>Quality & Affordability:</strong> We offer only the best prices for exceptional products, ensuring you don’t have to compromise on quality or style.</li>
                <li><strong>Personalized Service:</strong> Our team is dedicated to understanding your needs and helping you find the perfect pieces for your home.</li>
                <li><strong>Creativity Unleashed:</strong> We encourage you to see your space as a blank canvas where your ideas come to life, transforming empty rooms into magical settings.</li>
            </ul>
            <p className="text-gray-700">
                Join us on this journey of creativity and style. Let’s create beautiful spaces together!
            </p>
        </div>
        <Footer/>
        </>
    );
};

export default AboutUs;
