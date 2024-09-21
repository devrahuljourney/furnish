import React from 'react';
import { Link } from 'react-router-dom';

export default function Collection({ data }) {
  return (
    <div>
      <div className='w-full flex md:flex-row flex-col items-center justify-center gap-4 p-4'>
        {data.map((product, index) => (
          <Link 
            className='flex flex-col items-center md:w-[20%] h-auto p-1' 
            key={index} 
            to={`/product/${product.name}/${product._id}`}>
            <img 
              className='w-full h-full object-cover rounded-lg shadow-gray-300 shadow-lg'
              src={product.images[0]?.url} 
              alt={product.title} 
            />
            <p className='mt-2 text-center text-[13px] md:text-[11px]'>RAJWADA FURNISH</p>
            <p className='text-center md:text-[20px] md:font-normal font-bold text-[20px]'>{product.name}</p>
            <p className='text-center font-bold text-[16px] text-gray-700'>From {product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
