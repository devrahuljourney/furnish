import React, { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { searchAllProduct } from '../../services/operations/searchAPI';

export default function ShopByRoom() {
  const [currIndex, setCurrIndex] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  
  const fetchAllResults = async (q = "room") => {
    try {
      setLoading(true);
      const response = await searchAllProduct(q);
      if (response && response.products) {
        setData(response.products

        ); 
      }
      console.log("search category", data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllResults();
  }, []);

  // Handle navigation arrow clicks and ensure valid index
  const handlePrev = () => {
    setCurrIndex((currIndex - 1 + data.length) % data.length);
  };

  const handleNext = () => {
    setCurrIndex((currIndex + 1) % data.length);
  };

  // Render loading state
  if (loading) {
    return <p>Loading products...</p>;
  }

  // Fallback message for empty data
  if (data.length === 0) {
    return <p>No products available at the moment.</p>;
  }

  // Safeguard current product data
  const currentProduct = data[currIndex] || {};
  const currentImage = currentProduct.images?.[0]?.url || "https://via.placeholder.com/400"; // Default image if not available
  const productName = currentProduct.name || "Unnamed Product";
  const productPrice = currentProduct.price ? `₹ ${currentProduct.price}` : "Price not available";
  const subcategory = currentProduct.subcategory?.name || "subcategory";

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      {/* Heading Section */}
      <div className='flex flex-col justify-center items-center'>
        <p className='uppercase font-bold text-[20px] md:text-[25px]'>Shop By Room</p>
        <p className='text-[13px]'>Your room may look like</p>
      </div>

      {/* Room Content */}
      <div className='flex w-full flex-row justify-center items-center gap-5 md:p-7'>
        {/* Navigation Arrows */}
        <div className='w-[40px] h-[40px] rounded-full shadow-sm shadow-gray-400 flex justify-center items-center cursor-pointer'>
          <IoIosArrowBack className='w-[25px] h-[25px]' onClick={handlePrev} />
        </div>

        <div className='w-full flex flex-col md:flex-row justify-evenly items-center p-2 gap-6'>
          {/* Image and Title */}
          <div className='flex flex-col justify-center items-center'>
            <img loading='lazy' className='w-[300px] h-[300px] md:w-[400px] md:h-[400px]' src={currentImage} alt={productName} />
            <p className='text-[13px] mt-2'>{productName}</p>
          </div>

          {/* Product Information */}
          <div className='flex flex-col justify-center items-center gap-2'>
            <p className='text-[18px] md:text-[21px] font-semibold'>{productName}</p>
            <p className='font-semibold text-[#6a6a8d]'>  {productPrice.toLocaleString('en-IN')}  </p>

            {/* View Product Button */}
            <Link to={`/product/${currentProduct.name}/${currentProduct._id}`}>
              <button className='button-48 shop'>View Product</button>
            </Link>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className='w-[40px] h-[40px] rounded-full shadow-sm shadow-gray-400 flex justify-center items-center cursor-pointer'>
          <IoIosArrowForward className='w-[25px] h-[25px]' onClick={handleNext} />
        </div>
      </div>
    </div>
  );
}
