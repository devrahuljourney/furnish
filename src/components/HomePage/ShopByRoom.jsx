import React, { useState } from 'react';
import { subcategoryData } from '../../data/dummyData'; // Assuming your dummyData file exports subcategoryData correctly
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function ShopByRoom() {
  const [currIndex, setCurrIndex] = useState(0);

  return (
    <div className='w-full flex flex-col justify-center items-center' >
      {/* Heading Section */}
      <div className='flex flex-col justify-center items-center' >
        <p className=' uppercase font-bold md:text-[25px] text-[20px] ' >Shop By Room</p>
        <p className=' text-[13px]  ' >Your room may look like</p>
      </div>

      {/* Room Content */}
      <div className='flex w-full flex-row justify-center items-center gap-5 md:p-7' >
        {/* Navigation Arrows */}
        <div className=' w-[40px] h-[40px] rounded-full shadow-sm shadow-gray-400 flex justify-center items-center '> 
          <IoIosArrowBack  style={{width:"25px" , height: "25px"}}
            onClick={() => setCurrIndex((currIndex - 1 + subcategoryData.length) % subcategoryData.length)} 
          /> 
        </div>

        <div className=' w-full flex flex-col md:flex-row justify-evenly items-center  p-2 ' >
          {/* Image and Title */}
          <div className=' flex flex-col justify-center items-center  ' > 
            <img className=' md:w-[400px] md:h-[400px] w-[300px] h-[300px] ' src={subcategoryData[currIndex].thumbnail} alt="Room Thumbnail" /> 
            <p className=' text-[13px] ' >RAJWADA FURNISH</p> 
          </div>

          {/* Product Information */}
          <div  className='flex flex-col justify-center items-center gap-2 ' >
            <p className=' md:text-[21px] font-semibold ' > {subcategoryData[currIndex].products[0].title} </p>
            <p className=' font-semibold text-[#6a6a8d]  ' > ₹ {subcategoryData[currIndex].products[0].price} </p>
            
            {/* View Product Button */}
            <Link to={`/products/${subcategoryData[currIndex].subcategory}`} > 
              <button className=' button-48 ' > View Product </button> 
            </Link>
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <div className=' w-[40px] h-[40px] rounded-full shadow-sm shadow-gray-400 flex justify-center items-center ' > 
          <IoIosArrowForward  style={{width:"25px" , height: "25px"}}
            onClick={() => setCurrIndex((currIndex + 1) % subcategoryData.length)} 
          /> 
        </div>
      </div>
    </div>
  );
}
