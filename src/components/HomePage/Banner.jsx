import React, { useEffect, useState } from 'react';
const img1 = require("../../assets/1.webp");
const img2 = require("../../assets/2.webp");
const img3 = require("../../assets/3.webp");

export default function Banner() {
  const data = [img1, img2, img3]; 
  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrIndex((prev) => (prev + 1) % data.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <div
      className={`relative w-[100%] overflow-x-hidden h-[600px] md:h-[800px] bg-center bg-cover transition-transform duration-1000 ease-in-out`}
      style={{ backgroundImage: `url(${data[currIndex]})`, transform: `scale(1.05)` }}
    >
  
      <div className="absolute inset-0 bg-black opacity-60"></div> 

      
      <div className="relative flex flex-col justify-center items-center h-full text-center text-white px-4 md:px-0">
        <p className="text-xl md:text-4xl font-bold mb-4">Luxury, Comfort, and Style – Redefining Modern Furniture</p>
        <p className="text-sm md:text-lg">Customize your furniture to fit your space, style, and preferences perfectly.</p>
      </div>
    </div>
  );
}
